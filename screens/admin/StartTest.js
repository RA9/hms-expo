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
import { faker } from "@faker-js/faker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function StartTestScreen() {
  const navigation = useNavigation();
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
          <MaterialCommunityIcons name="cart" size={30} color="black" />
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "bold", paddingHorizontal: 20 }}
          >
            Medical Test
          </Text>
          {/* A flex container with three buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              columnGap: 20,
              marginTop: 20,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#38419D",
                padding: 10,
                flexGrow: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Blood Test</Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#38419D",
                padding: 10,
                flexGrow: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Urine Test</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#38419D",
                padding: 10,
                flexGrow: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>X-Ray</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* A two columns grid with each column( an image, title, descriptions, and price) */}
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
        <View
          style={{
            backgroundColor: "#ddd",
            padding: 20,
            borderRadius: 10,
            width: "48%",
          }}
        >
          <Image
            source={{
              uri: faker.image.avatar(),
            }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 10,
            }}
          />
          <Text style={styles.title}>Blood Test</Text>
          <Text style={{ color: "blue" }}> Read more</Text>
          <Text style={{ color: "red" }}> $50</Text>
          <Text style={{ color: "green" }}> Book Now</Text>
          <Text style={{ color: "blue" }}> Add to Cart</Text>
        </View>
        <View
          style={{
            backgroundColor: "#ddd",
            padding: 20,
            borderRadius: 10,
            width: "48%",
          }}
        >
          <Image
            source={{
              uri: faker.image.avatar(),
            }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 10,
            }}
          />
          <Text style={styles.title}>Blood Test</Text>
          <Text style={{ color: "blue" }}> Read more</Text>
          <Text style={{ color: "red" }}> $50</Text>
          <Text style={{ color: "green" }}> Book Now</Text>
          <Text style={{ color: "blue" }}> Add to Cart</Text>
        </View>
        <View
          style={{
            backgroundColor: "#ddd",
            padding: 20,
            borderRadius: 10,
            width: "48%",
          }}
        >
          <Image
            source={{
              uri: faker.image.avatar(),
            }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 10,
            }}
          />
          <Text style={styles.title}>Blood Test</Text>
          <Text style={{ color: "blue" }}> Read more</Text>
          <Text style={{ color: "red" }}> $50</Text>
          <Text style={{ color: "green" }}> Book Now</Text>
          <Text style={{ color: "blue" }}> Add to Cart</Text>
        </View>
        <View
          style={{
            backgroundColor: "#ddd",
            padding: 20,
            borderRadius: 10,
            width: "48%",
          }}
        >
          <Image
            source={{
              uri: faker.image.avatar(),
            }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 10,
            }}
          />
          <Text style={styles.title}>Blood Test</Text>
          <Text style={{ color: "blue" }}> Read more</Text>
          <Text style={{ color: "red" }}> $50</Text>
          <Text style={{ color: "green" }}> Book Now</Text>
          <Text style={{ color: "blue" }}> Add to Cart</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default StartTestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
});
