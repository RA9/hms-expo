import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

function InputComponent(props) {
  return (
    <>
      <View
        style={{
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
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 400 }}>{props.title}</Text>
        <TextInput
          style={{
            fontSize: 20,
            fontWeight: 400,
          }}
          placeholder={props.placeholder || "Enter text here..."}
          onTextInput={(e) => props.setValue(e.value || "")}
          value={props.value || ""}
        />
      </View>
    </>
  );
}

function CheckoutScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View style={{ flex: 1, marginTop: 40 }}>
            <Text
              style={{
                fontSize: 30,
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Customer Information
            </Text>
            <InputComponent
              title={"First Name:"}
              placeholder={"Enter your first name"}
              setValue={setFirstName}
              value={firstName}
            />
            <InputComponent
              title={"Last Name:"}
              placeholder={"Enter your last name"}
              setValue={setLastName}
              value={lastName}
            />
            <InputComponent
              title={"Address:"}
              placeholder={"Enter your address"}
              setValue={setAddress}
              value={address}
            />
            <InputComponent
              title={"Phone:"}
              placeholder={"Enter your phone number"}
              setValue={setPhone}
              value={phone}
            />
            <InputComponent
              title={"Email Address:"}
              placeholder={"Enter your email address"}
              setValue={setEmail}
              value={email}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 6,
              backgroundColor: "white",
              padding: 10,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
          >
            {/* product total price */}
            {/* <Text
              style={{
                fontSize: 30,
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Product Information
            </Text> */}
            <View
              style={{
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 400 }}>
                Number of Items
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>4</Text>
            </View>
            <View
              style={{
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 400 }}>
                Price per Item
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>$5.00</Text>
            </View>
            <View
              style={{
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 400 }}>
                Total Amount
              </Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>$20.00</Text>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 6 }}>
            {/* credit or debit  card */}
            <Text
              style={{
                fontSize: 30,
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Payment Information
            </Text>
            <InputComponent
              title={"Orange/Lonestar Number:"}
              placeholder={"Enter your Orange/Lonestar number"}
            />
            <InputComponent
              title={"Holder Name:"}
              placeholder={"Enter your card holder name"}
            />
          </View>
          <View style={{ flex: 1, marginTop: 6 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
              >
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default CheckoutScreen;
