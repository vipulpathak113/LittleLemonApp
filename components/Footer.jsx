import { View, Text } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={footerStyle.container}>
      <Text style={footerStyle.footerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const footerStyle = {
  container: {
    backgroundColor: "#333333,",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
};
