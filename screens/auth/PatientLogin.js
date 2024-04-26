import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import logo from "../../assets/logo.jpeg";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import { TextInput } from 'react-native-paper';
import { useFonts } from "expo-font";




const SubmitButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={submitBtnStyles.button}>
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};

const StyledText = styled(Text);
const StyledView = styled(View)
const StyledImage = styled(Image)

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form data submitted:", formData);
  };

  const [fontsLoaded, fontError] = useFonts({
    'Rubik': require("../../assets/Rubik-VariableFont_wght.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <StyledView className="py-24">
      <StatusBar style="auto" />
      {/* <ImageBackground
        source={require("../../assets/nss.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      > */}
      <StyledView className="flex items-center justify-center mt-2">
        <StyledImage source={require("../../assets/clearbg.png")} style={{
          height: 200,
          width: 200,
          resizeMode: "cover"
        }} className="rounded" />
      </StyledView>
      <StyledView className="mx-4 mt-2">
        {/* <Image
          style={{ width: 200, height: 100, marginBottom: 16 }}
          source={logo}
        /> */}
        <StyledText
          className="font-bold justify-start text-4xl mb-4 font-['Rubik']"
        >
          Login
        </StyledText>
      </StyledView>
      <StyledView className="mx-4 mb-2">
        <StyledView className="my-4">
          <TextInput
            placeholder="Email"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
            left={<TextInput.Icon icon="email" />}
          />
        </StyledView>
        <StyledView className="mb-4">
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={formData.password}
            left={<TextInput.Icon icon="eye" />}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </StyledView>
      </StyledView>


      <SubmitButton  onPress={handleSubmit} text="Submit" />
      {/* signup cta */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#000" }}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "#303080", fontWeight: "bold", fontSize: 18 }}>
            {" "}
            Sign Up
          </Text>
        </Pressable>
      </View>
      {/* </ImageBackground> */}
    </StyledView>
  );
};

const submitBtnStyles = StyleSheet.create({
  button: {
    backgroundColor: "#14c0d8" /* Blue background */,
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

export default LoginScreen;
