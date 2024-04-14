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
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function InfoCard({ title, smallText }) {
  return (
    <View
      style={{
        width: 120,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "left",
          color: "#d3d3d3",
        }}
      >
        {smallText}
      </Text>
    </View>
  );
}
function ViewPatientScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* gray card */}

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          gap: 10,
          borderRadius: 8,
          padding: 20,
          backgroundColor: "#fff",
        }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={35} color="black" />
        <Text style={styles.title}>Go Back</Text>
        {/* Add content for Tip 1 */}
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#ddd",
          padding: 20,
          height: 150,
          marginHorizontal: 20,
          marginVertical: 80,
          borderRadius: 10,
          paddingVertical: 20,
        }}
      >
        <Image
          source={{
            uri: faker.image.avatar(),
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Edmond Quigleys
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginBottom: 10, marginTop: -60 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <InfoCard title="Age" smallText="25" />
          <InfoCard title="Weight" smallText="75kg" />
          <InfoCard title="Height" smallText="5'9" />
        </View>
      </View>

      {/* List of Tips as columns */}
      <View
        style={{
          flexDirection: "column",
          marginHorizontal: 10,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            paddingHorizontal: 10,
            gap: 10,
            //   marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              gap: 10,
              borderRadius: 8,
              padding: 20,
              backgroundColor: "#fff",
            }}
          >
            <FontAwesome5 name="user-md" size={35} color="black" />
            <Text style={styles.title}>Personal Info</Text>
            {/* Add content for Tip 1 */}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              gap: 10,
              borderRadius: 8,
              padding: 20,
              backgroundColor: "#fff",
            }}
          >
            <FontAwesome name="calendar-times-o" size={35} color="black" />
            <Text style={styles.title}>Past Appointments</Text>
            {/* Add content for Tip 1 */}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderRadius: 8,
              padding: 20,
              backgroundColor: "#fff",
            }}
          >
            <MaterialCommunityIcons
              name="multiplication-box"
              size={35}
              color="black"
            />
            <Text style={styles.title}>Edmond Results</Text>
            {/* Add content for Tip 1 */}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 8,
              padding: 20,
              gap: 10,
            }}
            onPress={() => {
              navigation.navigate("StartTest");
            }}
          >
            <MaterialCommunityIcons
              name="chat-question"
              size={35}
              color="black"
            />
            <Text style={styles.title}>Start Test</Text>
            {/* Add content for Tip 1 */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ViewPatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
