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

function AppointmentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: "bold", paddingHorizontal: 20 }}
          >
            Appointments
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AppointmentsScreen;
