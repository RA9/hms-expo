import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";

const SubmitBtn = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={submitBtnStyles.button}>
      <Text style={submitBtnStyles.text}>{text}</Text>
    </Pressable>
  );
};

const StyledView = styled(View)


const VerificationComponent = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigation = useNavigation();

  const handleVerification = () => {
    // Add your verification logic here, e.g., send the code to a server for validation
    // Display an alert or perform further actions based on the verification result
    return navigation.navigate("Root");
  };

  return (
    <View style={{ height: "100%" }}>
      <StatusBar style="auto" />
        <StyledView className="my-8" />
        <View
          style={{
            marginVertical: 80,
            marginHorizontal: 10,
            borderRadius: 10,
            padding: 10,
            paddingVertical: 30,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10 }}>
            Enter Verification Code
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              paddingVertical: 20,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              Please check your inbox and enter the verification code sent to
              your email address below to complete your registration. The code
              will expire 14:59 minutes.
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Icon name="lock" size={20} color="#000" style={{ marginRight: 10 }} /> */}
            <TextInput
              style={{
                flex: 1,
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 16,
                marginHorizontal: 14,
                paddingHorizontal: 12,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#000",
              }}
              inputMode="numeric"
              value={verificationCode}
              onChangeText={(text) => setVerificationCode(text)}
            />
            <TextInput
              style={{
                flex: 1,
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 16,
                marginHorizontal: 14,
                paddingHorizontal: 12,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#000",
              }}
              inputMode="numeric"
              value={verificationCode}
              onChangeText={(text) => setVerificationCode(text)}
            />
            <TextInput
              style={{
                flex: 1,
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 16,
                marginHorizontal: 14,
                paddingHorizontal: 12,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#000",
              }}
              inputMode="numeric"
              value={verificationCode}
              onChangeText={(text) => setVerificationCode(text)}
            />
            <TextInput
              style={{
                flex: 1,
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                marginBottom: 16,
                marginHorizontal: 14,
                paddingHorizontal: 12,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#000",
              }}
              inputMode="numeric"
              value={verificationCode}
              onChangeText={(text) => setVerificationCode(text)}
            />
          </View>
          <SubmitBtn text="Verify" onPress={handleVerification} />
          <View
            style={{
              justifyContent: "center",
              padding: 10,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#000" }}>Didn't receive a code? </Text>
            <Pressable onPress={() => handleVerification()}>
              <Text style={{ color: "#14c0d8", fontWeight: "bold", fontSize: 18 }}>
                Resend
              </Text>
            </Pressable>
          </View>
        </View>
    </View>
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

export default VerificationComponent;
