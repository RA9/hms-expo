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

const TreatmentList = ({ treatments }) => {
  const navigation = useNavigation();
  return (
    <View style={treatmentListStyles.container}>
      <Text style={treatmentListStyles.title}>Result History</Text>
      {treatments.map((treatment, index) => (
        <View key={index} style={treatmentListStyles.treatmentItem}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View>
              <Text>
                {new Date(treatment.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
              <Text style={{ paddingTop: 10 }}>{treatment.description}</Text>
            </View>
            <View>
              {/* create a view button */}
              <Pressable
                style={{
                  backgroundColor: "#38419D",
                  padding: 10,
                  borderRadius: 8,
                }}
                onPress={() => navigation.navigate("ViewResult")}
              >
                <Text style={{ color: "#fff" }}>View</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};


function TreatmentsScreen() {
    const [treatments, setTreatments] = React.useState([
        {
          date: "2021-01-01",
          description: "Treatment 1",
        },
        {
          date: "2021-01-02",
          description: "Treatment 2",
        },
        {
          date: "2021-01-03",
          description: "Treatment 3",
        },
        {
          date: "2021-01-02",
          description: "Treatment 2",
        },
        {
          date: "2021-01-03",
          description: "Treatment 3",
        },
        {
          date: "2021-01-02",
          description: "Treatment 2",
        },
        {
          date: "2021-01-03",
          description: "Treatment 3",
        },
      ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header name="Results" />
        <TreatmentList treatments={treatments} />
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
  },
  treatmentItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
});

export default TreatmentsScreen;
