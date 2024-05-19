import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = (props) => {
    return (
      <View style={headerStyles.container}>
        <TouchableOpacity style={headerStyles.menuButton}>
          <Icon name="bars" size={30} color="#000" />
        </TouchableOpacity>
       { props.name && <Text style={{ fontSize: 20, fontWeight: "bold" }}>{props.name}</Text> } 
        <View style={headerStyles.rightSection}>
          <TouchableOpacity style={headerStyles.notificationButton}>
            <Icon name="bell" size={30} color="#000" />
          </TouchableOpacity>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={headerStyles.avatar}
          />
        </View>
      </View>
    );
  };


  const headerStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
    },
    menuButton: {
      marginRight: 10,
    },
    rightSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    notificationButton: {
      marginRight: 20,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
  });
export default Header;