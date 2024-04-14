import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/logo.jpeg";
import { useNavigation } from "@react-navigation/native";

const Btn = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={submitBtnStyles.button}>
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};

const PreLoginScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form data submitted:", formData);
  };

  const handlePatient = () => {
    navigation.navigate("Login");
  };

  const handleAdmin = () => {
    navigation.navigate("AdminLogin");
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/ps.png")}
        style={{
          height: "100%",
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}
            >
              Login
            </Text>
          </View>

          {/* Add two buttons */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginHorizontal: 8,
              height: 130,
            }}
          >
            <Btn onPress={handlePatient} text="Patient" />
            <Btn onPress={handleAdmin} text="Administrator" />
          </View>
        </View>
      </ImageBackground>
      {/* copyright */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 16 }}>
          © {new Date().getFullYear()} All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

const submitBtnStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff" /* Blue background */,
    padding: 15,
    borderRadius: 5,
    // marginHorizontal: 14,
    width: 160,
    /* Add more styles as needed */
  },
  text: {
    color: "#fff" /* White text */,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 20,
    shadowOpacity: 0.5,
    height: "40%",
  },
});

export default PreLoginScreen;
