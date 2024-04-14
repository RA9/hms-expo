import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import logo from "../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

const SubmitButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={submitBtnStyles.button}>
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [checked, setChecked] = useState("male");

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form data submitted:", formData);
    navigation.navigate("Verify");
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
        <View style={{ marginTop: 140, marginBottom: 60 }}>
          <View style={styles.container}>
            {/* Avatar */}
            <ScrollView>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ width: 160, height: 160, marginBottom: 16 }}
                  source={{ uri: "https://api.multiavatar.com/BBond.png" }}
                />
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="enter your first name"
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
                  First Name
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="enter your middle name"
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
                  Middle Name
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="enter your last name"
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
                  Last Name
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="eg. doe@example.com"
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
                  Email
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="eg. +231771234567"
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
                  Phone Number
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="eg. Congo Town, Monrovia, Liberia"
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
                  Address
                </Text>
              </View>
              <RadioButton.Group
                onValueChange={(newValue) => setChecked(newValue)}
                value={checked}
              >
                <RadioButton.Item label="Male" value="male" />
                <RadioButton.Item label="Female" value="female" />
              </RadioButton.Group>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="eg. 01/01/2000"
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
                  Date of Birth
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
              <View style={{ position: "relative" }}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
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
                  Confirm Password
                </Text>
              </View>

              <SubmitButton onPress={handleSubmit} text="Submit" />
              {/* </View> */}
              {/* signup cta */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 20,
                }}
              >
                <Text style={{ color: "#000" }}>Do you have an account?</Text>
                <Pressable onPress={() => alert("Sign Up")}>
                  <Text
                    style={{ color: "#00f", fontWeight: "bold", fontSize: 18 }}
                  >
                    {" "}
                    Login
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
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
    width: "90%",
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
    // height: "45%",
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

export default RegisterScreen;
