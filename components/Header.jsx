import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ backgroundColor: "#F4CE14"}}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
