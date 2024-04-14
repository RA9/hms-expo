import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropdownSelect from "react-native-input-select";
import DateTimePicker from "@react-native-community/datetimepicker";

function ViewAppointmentsScreen() {
  const [nurse, setNurse] = useState("1");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView automaticallyAdjustKeyboardInsets={true} style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 60,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Create Appointments
            </Text>
            <View style={styles.flexContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  width: "60%",
                }}
              >
                Patient Name
              </Text>
              <TextInput
                placeholder="Fullname"
                editable={false}
                value="Randy Brickson"
                style={{ fontSize: 20, width: "40%" }}
              />
            </View>
            <View style={styles.flexContainer}>
              <Text style={{ fontSize: 20, fontWeight: "bold", width: "60%" }}>
                Phone Number
              </Text>
              <TextInput
                placeholder="Phone Number"
                value="+231778931127"
                editable={false}
                style={{ fontSize: 20, width: "40%" }}
              />
            </View>
            <View style={styles.flexContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 6,
                  width: "60%",
                }}
              >
                Date of Birth
              </Text>
              <TextInput
                placeholder="Date of Birth"
                value="12/12/1990"
                editable={false}
                style={{ fontSize: 18, width: "40%" }}
              />
            </View>
            <View style={styles.flexContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 6,
                  width: "60%",
                }}
              >
                Gender
              </Text>
              <TextInput
                value="Male"
                editable={false}
                style={{ fontSize: 18, width: "40%" }}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View style={styles.flexContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                    width: "60%",
                  }}
                >
                  Date
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "600", width: "40%" }}>
                  {date.toDateString()}
                </Text>
              </View>
              <View style={styles.flexContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    marginBottom: 10,
                    width: "60%",
                  }}
                >
                  Time
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "600", width: "40%" }}>
                  10:00 AM
                </Text>
              </View>
            </View>
            {/* a select option */}
            <View style={styles.flexContainer}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  marginBottom: 10,
                  width: "60%",
                }}
              >
                Nurse Name:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  marginBottom: 10,
                  width: "40%",
                }}
              >
                John Doe
              </Text>
            </View>

            <View style={styles.flexContainer}>
              <Text style={{ fontSize: 20, fontWeight: "600", width: "60%" }}>
                Location
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "600", width: "40%" }}>
                12th Street Sinkor
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}
              >
                Reason for Appointment
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget nunc nec libero ultricies aliquet. Nullam nec nunc nec
                libero ultricies aliquet. Nullam nec nunc nec libero ultricies
              </Text>
            </View>
          </View>
        </View>
        {/* submit button */}
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            width: "100%",
            gap: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 10,
              width: "50%",
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              Approved
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 10,
              borderRadius: 10,
              width: "50%",
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default ViewAppointmentsScreen;
