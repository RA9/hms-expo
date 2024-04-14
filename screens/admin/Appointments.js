import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { faker } from "@faker-js/faker";
import { Ionicons } from "@expo/vector-icons";

import Header from "../../components/Header";

function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    registeredAt: faker.date.past(),
  };
}

function AppointmentsScreen() {
  const [patients, setPatients] = React.useState(
    faker.helpers.multiple(createRandomUser, {
      count: 15,
    }),
  );
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();

  // use effect to filter patients
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setPatients(filteredPatients);
    } else {
      setPatients(faker.helpers.multiple(createRandomUser, { count: 15 }));
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={treatmentListStyles.title}>My Appointments</Text>
      {/* Three columns card with the following (Upcoming, Complete, Cancel) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 14,
            borderRadius: 8,
            marginRight: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 14,
            borderRadius: 8,
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            Complete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: 14,
            borderRadius: 8,
            marginLeft: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 150,
              backgroundColor: "#d3d3d3",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexBasis: "40%", width: 100 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 60, height: 60, borderRadius: 50 }}
                    source={require("../../assets/dd.png")}
                  />
                  <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      John Doe
                    </Text>
                    <Text style={{ fontSize: 12 }}>(084) 678 324</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexBasis: "30%" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  $200
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 30,
                flexDirection: "row",
                alignItems: "center",
                rowGap: 10,
                gap: 6,
                paddingHorizontal: 10,
              }}
            >
              <Ionicons name="time-outline" size={24} color="black" />
              <Text style={{ fontSize: 14 }}>
                10:00 AM - 12:00 PM, 2:00 PM - 4:00 PM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38419D",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const treatmentListStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  title: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  treatmentItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
});

export default AppointmentsScreen;
