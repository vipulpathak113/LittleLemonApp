import { View, Text } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ flex:0.1,backgroundColor: "#F4CE14" }}>
      <Text style={{ padding: 20, fontSize: 20, color: "black",textAlign:"center" }}>
        Welcome to Little Lemon
      </Text>
    </View>
  );
}
