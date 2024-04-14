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

function ViewCart({ route, navigation }) {
  const { cart } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
          }}
        >
          {/* Back Arrow Icon and Cart Icon on the right */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Order</Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            {cart.map((item, index) => (
              <View
                key={index}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 8,
                  backgroundColor: "#fff",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 400 }}>
                    Order: {item.id}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 400 }}>
                    ({item.items.length} item(s))${item.totalPrice}
                  </Text>
                </View>
                {item.items.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                      marginVertical: 20,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{ width: 100, height: 100, borderRadius: 8 }}
                    />
                    <View style={{ width: "40%" }}>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "blue",
                        }}
                      >
                        ${item.price}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}

            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                padding: 10,
                borderRadius: 8,
                padding: 12,
                margin: 10,
              }}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text
                style={{ color: "#fff", fontSize: 18, textAlign: "center" }}
              >
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ViewCart;
