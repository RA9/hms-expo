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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";
import { faker } from "@faker-js/faker";

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

function PatientsScreen() {
  const [patients, setPatients] = React.useState(
    faker.helpers.multiple(createRandomUser, {
      count: 15,
    })
  );
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();

  // use effect to filter patients
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPatients(filteredPatients);
    } else {
      setPatients(faker.helpers.multiple(createRandomUser, { count: 15 }));
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={treatmentListStyles.title}>Patients</Text>
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {patients.map((patient, index) => (
          <View key={index} style={treatmentListStyles.treatmentItem}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
                onPress={() => navigation.navigate("ViewPatient")}
            >
              <View>
                <Text style={{ paddingTop: 10 }}>{patient.name}</Text>
                {/* <Text style={{ paddingTop: 10 }}>{patient.email}</Text>
                <Text style={{ paddingTop: 10 }}>{patient.phone}</Text> */}
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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

export default PatientsScreen;
