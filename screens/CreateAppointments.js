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

function CreateAppointmentsScreen() {
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
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 6 }}
              >
                Patient Name
              </Text>
              <TextInput
                placeholder="Fullname"
                editable={false}
                value="Randy Brickson"
                style={{ fontSize: 18, width: "100%" }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Phone Number
              </Text>
              <TextInput
                placeholder="Phone Number"
                value="+231778931127"
                editable={false}
                style={{ fontSize: 20, width: "100%" }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 6 }}
              >
                Date of Birth
              </Text>
              <TextInput
                placeholder="Date of Birth"
                value="12/12/1990"
                editable={false}
                style={{ fontSize: 18, width: "100%" }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 6 }}
              >
                Gender
              </Text>
              <TextInput
                value="Male"
                editable={false}
                style={{ fontSize: 18, width: "100%" }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}
                >
                  Select a date
                </Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  display="calendar"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}
                >
                  Select a time
                </Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="time"
                  is24Hour={true}
                  onChange={onChange}
                />
              </View>
            </View>
            {/* a select option */}
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}
              >
                Select a nurse
              </Text>
              <DropdownSelect
                placeholder="Select a nurse"
                options={[
                  { name: "John Doe", code: "1" },
                  { name: "Peter Pan", code: "2" },
                  { name: "Amos Dweh", code: "3" },
                ]}
                optionLabel={"name"}
                optionValue={"code"}
                selectedValue={nurse}
                onValueChange={(itemValue) => setNurse(itemValue)}
                isSearchable
              />
            </View>

            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Location"
                style={{ fontSize: 20, width: "100%" }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 15,
                backgroundColor: "white",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                multiline={true}
                editable={true}
                numberOfLines={6}
                textAlignVertical="top"
                scrollEnabled={true}
                placeholder="What is happening to you?"
                style={{ fontSize: 20, width: "100%", minHeight: 200 }}
              />
            </View>
          </View>
          {/* submit button */}
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "skyblue",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 20 }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateAppointmentsScreen;
