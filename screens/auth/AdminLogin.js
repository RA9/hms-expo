import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import logo from "../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";


const SubmitButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={submitBtnStyles.button}>
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};

const AdminLoginScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const {state, signin} = useContext(AuthContext);


  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    // Handle form submission here
    try {
      // const userData = await login(formData.username, formData.password);
      signin({email: formData.username, password: formData.password})
      // console.log({ userData });
      // navigation.navigate("Admin");
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/nss.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* <Image
          style={{ width: 200, height: 100, marginBottom: 16 }}
          source={logo}
        /> */}
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}
            >
              Administrator Login
            </Text>
          </View>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={formData.username}
              onChangeText={(text) => handleInputChange("username", text)}
            />
            <Text
              style={{
                position: "absolute",
                top: -8,
                left: 30,
                backgroundColor: "#fff",
                paddingHorizontal: 4,
                color: "gray",
              }}
            >
              Username
            </Text>
          </View>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <Text
              style={{
                position: "absolute",
                top: -8,
                left: 30,
                backgroundColor: "#fff",
                paddingHorizontal: 4,
                color: "gray",
              }}
            >
              Password
            </Text>
          </View>

          <SubmitButton onPress={handleSubmit} text="Submit" />
        </View>
      </ImageBackground>
    </View>
  );
};

const submitBtnStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff" /* Blue background */,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 14,
    width: "95%",
    /* Add more styles as needed */
  },
  text: {
    color: "#fff" /* White text */,
    textAlign: "center",
    fontWeight: "bold",
  },
});
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    marginHorizontal: 20,
    shadowOpacity: 0.5,
    height: "45%",
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    width: "80%",
    hight: 60,
    backgroundColor: "#1AA2E6",
    padding: 15,
    marginHorizontal: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AdminLoginScreen;
