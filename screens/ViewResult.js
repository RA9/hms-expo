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
import { WebView } from "react-native-webview";

function ViewResultScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://uploads-ssl.webflow.com/64f848e0ac4cc9c8d6a71757/652368c0e7c8619fb7725261_66892163229.pdf",
        }}
      />
    </View>
  );
}

export default ViewResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
