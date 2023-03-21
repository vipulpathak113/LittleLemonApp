import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"}>
      <Text style={welcomeStyle.headingText}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyle.mainText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const welcomeStyle = StyleSheet.create({
  headingText: {
    padding: 40,
    fontSize: 50,
    color: "#EDEFEE",
    textAlign: "center",
  },
  mainText: {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
