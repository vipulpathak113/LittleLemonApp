import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.headerText}>Little Lemon</Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
