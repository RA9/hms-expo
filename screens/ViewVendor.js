import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewVendorScreen({ route, navigation }) {
  const { vendor } = route.params;
  const cart = [
    {
      id: "43217BCDE",
      items: [
        {
          name: vendor.medications[0].name,
          price: vendor.medications[0].price,
          image: vendor.medications[0].image,
        },
        {
          name: vendor.medications[1].name,
          price: vendor.medications[1].price,
          image: vendor.medications[1].image,
        },
        {
          name: vendor.medications[2].name,
          price: vendor.medications[2].price,
          image: vendor.medications[2].image,
        },
      ],
      totalPrice:
        Number(vendor.medications[0].price) +
        Number(vendor.medications[1].price) +
        Number(vendor.medications[2].price),
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {/* Back Arrow Icon and Cart Icon on the right */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <MaterialCommunityIcons
            onPress={() =>
              navigation.navigate("Cart", {
                cart: cart,
              })
            }
            name="cart"
            size={30}
            color="black"
          />
        </View>

        {/* A two columns grid with each column( an image, title, descriptions, and price) */}
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 14,
              paddingHorizontal: 20,
              marginTop: 20,
            }}
          >
            {vendor.medications.map((medicine, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#ddd",
                    padding: 20,
                    borderRadius: 10,
                    width: "48%",
                  }}
                >
                  <Image
                    source={medicine.image}
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 8,
                    }}
                  />
                  <Text style={styles.title}>{medicine.name}</Text>
                  <Text style={{ color: "blue" }}> Read more</Text>
                  <Text style={{ color: "red" }}> $50</Text>
                  <Text style={{ color: "blue" }}> Add to Cart</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ViewVendorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
