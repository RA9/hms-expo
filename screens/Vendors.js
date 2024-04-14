import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import { TouchableOpacity } from "react-native";

const VendorList = ({ treatments }) => {
  const navigation = useNavigation();
  return (
    <View style={treatmentListStyles.container}>
      <Text style={treatmentListStyles.title}>Pharmacies</Text>
      {treatments.map((treatment, index) => (
        <View key={index} style={treatmentListStyles.treatmentItem}>
          <TouchableOpacity
            style={{
              width: "100%",
              padding: 14,
              backgroundColor: "#f9f9f9",
              borderRadius: 8,
            }}
            onPress={() =>
              navigation.navigate("ViewVendor", {
                vendor: treatment,
              })
            }
          >
            <Text style={{ paddingTop: 10, fontSize: 20 }}>
              {treatment.title}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

function VendorsScreen() {
  const [vendors, setVendors] = React.useState([
    {
      title: "Itter Pharmacy",
      medications: [
        {
          name: "Paracetamol",
          price: 100,
          stock: 20,
          image: require("../assets/paracetamol.jpeg"),
        },
        {
          name: "Ibuprofen",
          price: 200,
          stock: 10,
          image: require("../assets/ibuprofen.jpeg"),
        },
        {
          name: "Tylenol",
          price: 200,
          stock: 10,
          image: require("../assets/tylenol.jpeg"),
        },
        {
          name: "Flagyl",
          price: 200,
          stock: 10,
          image: require("../assets/flagyl.jpeg"),
        },
        {
          name: "Morphine",
          price: 200,
          stock: 10,
          image: require("../assets/morphine.jpeg"),
        },
        {
          name: "Omeprazole",
          price: 200,
          stock: 10,
          image: require("../assets/omeprazole.jpeg"),
        },
      ],
    },
    {
      title: "Bounty Pharmacy",
      medications: [
        {
          name: "Paracetamol",
          price: 100,
          stock: 20,
          image: require("../assets/paracetamol.jpeg"),
        },
        {
          name: "Ibuprofen",
          price: 200,
          stock: 10,
          image: require("../assets/ibuprofen.jpeg"),
        },
        {
          name: "Omeprazole",
          price: 200,
          stock: 10,
          image: require("../assets/omeprazole.jpeg"),
        },
      ],
    },
    {
      title: "Lucky Pharmacy",
      medications: [
        {
          name: "Paracetamol",
          price: 100,
          stock: 20,
          image: require("../assets/paracetamol.jpeg"),
        },
        {
          name: "Ibuprofen",
          price: 200,
          stock: 5,
          image: require("../assets/ibuprofen.jpeg"),
        },
      ],
    },
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <View>
          <VendorList treatments={vendors} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const treatmentListStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  treatmentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
});

export default VendorsScreen;
