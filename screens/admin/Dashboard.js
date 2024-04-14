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
import { useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Searchbar } from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";

import Header from "../../components/Header";
import PatientsScreen from "./Patients";
import AppointmentsScreen from "./Appointments";

const Tab = createMaterialBottomTabNavigator();

const ThreeColumnCards = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{
            paddingVertical: 10,
            alignItems: "left",
          }}
          onPress={() => navigation.navigate("Patients")}
        >
          <FontAwesome5 name="hospital-user" size={15} color="black" />
          <Text style={styles.title}>Patients</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View
          style={{
            paddingVertical: 10,
            alignItems: "left",
          }}
        >
          <FontAwesome5 name="clinic-medical" size={15} color="black" />
          {/* <MaterialCommunityIcons name="plus-box" size={15} color="black" /> */}
          <Text style={styles.title}>Clinics</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View
          style={{
            paddingVertical: 10,
            alignItems: "left",
          }}
        >
          <FontAwesome5 name="receipt" size={15} color="black" />
          <Text style={styles.title}>EHR Files</Text>
        </View>
      </View>
    </View>
  );
};

function AppointmentCard() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("ViewAppointments")}>
        <View style={{ width: "100%", marginTop: 2 }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
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
      </TouchableOpacity>
    </>
  );
}

function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  // use effect to filter patients
  // useEffect(() => {
  //   if (searchQuery.length > 0) {
  //     const filteredPatients = patients.filter((patient) =>
  //       patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setPatients(filteredPatients);
  //   } else {
  //     setPatients(faker.helpers.multiple(createRandomUser, { count: 15 }));
  //   }
  // }, [searchQuery]);
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              style={{
                textAlign: "left",
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 0,
                padding: 20,
              }}
            >
              Welcome back, User!
            </Text>
          </View>
          {/* Search input  component */}
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              width: "100%",
            }}
          >
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View style={{ width: "100%", marginVertical: 0 }}>
            <Text
              style={{
                textAlign: "left",
                fontSize: 20,
                fontWeight: "bold",
                paddingHorizontal: 20,
              }}
            >
              Services
            </Text>
          </View>
          <ThreeColumnCards />
          <View style={{ width: "100%", marginTop: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                }}
              >
                Your Appointments
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                  color: "#6200EE",
                }}
              >
                See all
              </Text>
            </View>
          </View>
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
          <AppointmentCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AdminDashboard"
      activeColor="#6200EE"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="AdminDashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color }) => (
            <Octicons name="checklist" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Patients"
        component={PatientsScreen}
        options={{
          tabBarLabel: "Patients",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
    width: "100%",
    flexWrap: "wrap",
  },
  card: {
    flexBasis: "28%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    height: 100,
    marginHorizontal: 5,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default HomeNavigator;
