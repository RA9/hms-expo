import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

import { styled } from "nativewind";

import Header from "../components/Header";
import ResultsScreen from "./Results";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewResultScreen from "./ViewResult";
import AppointmentsScreen from "./Appointments";
import { shadow } from "react-native-paper";

const Tab = createBottomTabNavigator();
const ParentStack = createNativeStackNavigator();

const StyledView = styled(View);
const StyledText = styled(Text);

const ThreeColumnCards = () => {
  const navigation = useNavigation();
  return (
    <StyledView style={styles.container}>
       <StyledView style={styles.card}>
        <TouchableOpacity
          style={{
            paddingVertical: 40,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Vendors");
          }}
        >
          <MaterialCommunityIcons name="medical-bag" size={35} color="#14c0d8" />
          <Text style={styles.title}>Buy</Text>
          <Text style={styles.title}>Medication</Text>

        </TouchableOpacity>
      </StyledView>
      <StyledView style={styles.card}>
        <TouchableOpacity
          style={{
            paddingVertical: 40,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Results")}
        >
          <MaterialCommunityIcons name="heart-pulse" size={35} color="#14c0d8" />
          <Text style={styles.title}>Results</Text>
        </TouchableOpacity>
      </StyledView>
      <StyledView style={styles.card}>
        <TouchableOpacity
          style={{
            paddingVertical: 40,
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Root", {
              screen: "Treatments",
            });
          }}
        >
          <MaterialCommunityIcons name="medical-bag" size={35} color="#14c0d8" />
          <Text style={styles.title}>Treatments</Text>
        </TouchableOpacity>
      </StyledView>
      {/* <StyledView style={styles.card}>
        <View
          style={{
            paddingVertical: 40,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="receipt" size={35} color="#14c0d8" />
          <Text style={styles.title}>Receipt</Text>
        </View>
      </StyledView> */}
    </StyledView>
  );
};

function AppointmentCard() {
  return (
    <>
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
                    source={require("../assets/dd.png")}
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
                  Delivered
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
    </>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Header name="Dashboard" />
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

          <StyledView className="w-full">
            <StyledView className="flex p-4 py-8 mx-4 my-4 bg-[#14c0d8] rounded-lg h-min-[400px]">
              {/* heading */}
              <StyledText className="font-medium text-2xl text-white">
                Personalized Health Care
              </StyledText>
              <StyledText className="font-sm text-md text-white">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae nunc eget lorem ultricies. Donec vitae nunc eget lorem
                ultricies. Donec vitae nunc eget lorem ultricies.
              </StyledText>
              {/* submit button */}

            </StyledView>
          </StyledView>
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
                Set Appointment
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CreateAppointments");
                }}
              >
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingHorizontal: 20,
                    color: "#6200EE",
                  }}
                >
                  <FontAwesome5 name="folder-plus" size={35} color="#14c0d8" />
                </Text>
              </TouchableOpacity>
            </View>

            <AppointmentCard />
          </View>

          {/* List of Tips as columns */}
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              paddingHorizontal: 10,
              gap: 10,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#fff",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <MaterialCommunityIcons
                name="multiplication-box"
                size={35}
                color="black"
              />
              <Text style={styles.title}>Health Tips</Text>
              {/* Add content for Tip 1 */}
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#fff",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <MaterialCommunityIcons
                name="chat-question"
                size={35}
                color="black"
              />
              <Text style={styles.title}>FAQ</Text>
              {/* Add content for Tip 1 */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// a stack navigator for the home screen and tabs
function HomeStack() {
  return (
    <ParentStack.Navigator>
      {/* <ParentStack.Screen
        name="Vendors"
        component={VendorsScreen}
        options={{ headerShown: false }}
      /> */}
      <ParentStack.Screen
        name="ViewResult"
        component={ViewResultScreen}
        options={{ headerShown: false }}
      />
      {/* <ParentStack.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      /> */}
    </ParentStack.Navigator>
  );
}

function CustomTabBar({children, onPress}) {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
     onPress={onPress}>
      <View style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#14c0d8",
      }}>
      {children}
      </View>
    </TouchableOpacity>
  )
}
function HomeNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Dashboard"
        // activeColor="#6200EE"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        }}
        // barStyle={{ backgroundColor: "#fff" }}
      >
        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => (
              <StyledView className="items-center justify-center">
                <MaterialCommunityIcons name="home" color={focused ? "#14c0d8" : "#000"} size={30} />
                {/* <StyledText className={`text-xs font-sm text-[${color}]`}>Home</StyledText> */}
              </StyledView>
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentsScreen}
          options={{
            // tabBarLabel: "Appointments",
            showLabel: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="back-in-time" size={30} color="#fff" />
            ),
            tabBarButton: (props) => (
              <CustomTabBar {...props} >
                {/* <Entypo name="back-in-time" size={26} color="#fff" /> */}
              </CustomTabBar>
            )
          }}
        />
        <Tab.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            tabBarLabel: "Results",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={focused ? "#14c0d8" : "#000"}
                size={30}
              />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Treatments"
          component={TreatmentsScreen}
          options={{
            tabBarLabel: "Treatments",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="medical-bag"
                color={color}
                size={26}
              />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 20,
    width: "100%",
    flexWrap: "nowrap",
  },
  card: {
    flexBasis: "30%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    height: 200,
    margin: 5,
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
    marginBottom: 10,
    color: "black",
  },
  shadow: {
    shadowColor: "#14c0d8",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default HomeNavigator;
