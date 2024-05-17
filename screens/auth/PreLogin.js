import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/logo3.png";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import { Image } from "expo-image";

const Btn = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} className="w-full bg-[#14c0d8] p-4 m-4 rounded-lg">
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};


const StyledText = styled(Text);
const StyledView = styled(View);
const StyledImage = styled(Image);

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
      <StyledView
        className="flex flex-col justify-center items-center py-48 mx-4"
      >
        <StyledImage
          source={logo}
          style={{ width: 300, height: 200, marginBottom: 20 }}
        />
        <Btn onPress={handlePatient} text="Patient" />
        <Btn onPress={handleAdmin} text="Administrator" />
      </StyledView>
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
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 20,
    shadowOpacity: 0.5,
  },
});

export default PreLoginScreen;
