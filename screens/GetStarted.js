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

function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome, Carlos</Text>
    </View>
  );
}

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
