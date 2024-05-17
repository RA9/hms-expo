import React, { useState } from "react";
import {
  View,
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
import { RadioButton, TextInput, Appbar } from "react-native-paper";


const SubmitButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} className="w-full bg-[#14c0d8] p-4 rounded-lg my-2">
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
    <View style={{ height: "100%" }} className="bg-white">
      <StatusBar style="auto" />
      <Appbar.Header className="bg-white"> 
        <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate("Login")} />
        <Appbar.Content title="Create an account" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
        {/* <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
      </Appbar.Header>
      <ScrollView className="mx-4 my-8">
        <View className="flex items-center gap-4 my-2">
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="First Name"
            value={formData.username}
            textContentType="givenName"
            autoComplete="given-name"
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Middle Name"
            textContentType="middleName"
            autoComplete="middle-name"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Last Name"
            textContentType="familyName"
            autoComplete="family-name"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Email"
            textContentType="emailAddress"
            autoComplete="email"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Phone Number"
            textContentType="telephoneNumber"
            autoComplete="tel"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Address"
            textContentType="streetAddressLine1"
            autoComplete="street-address"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
        </View>
        {/* <RadioButton.Group
          onValueChange={(newValue) => setChecked(newValue)}
          value={checked}
        >
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </RadioButton.Group> */}
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Date"
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </View>
        <View className="my-2">
          <TextInput
            className="bg-gray-300"
            placeholder="Confirm Password"
            textContentType="password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </View>

        <SubmitButton onPress={handleSubmit} text="Submit" />
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
              style={{ color: "#14c0d8", fontWeight: "bold", fontSize: 18 }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const submitBtnStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff" /* Blue background */,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 14,
    width: "100%",
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
