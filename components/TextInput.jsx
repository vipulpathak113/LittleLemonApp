import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

export default function Input() {
  const [firstName, setFirstName] = useState("");

  const handleInputText = (text) => {
    setFirstName(text)
  };

  return (
    <KeyboardAvoidingView
    style={{flex:1}}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <ScrollView keyboardDismissMode="on-drag">
      <Text style={welcomeStyle.headingText}>Welcome to Little Lemon</Text>
      <Text style={welcomeStyle.mainText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
        <TextInput
          style={welcomeStyle.textInput}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleInputText}
        />
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const welcomeStyle = StyleSheet.create({
  headingText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  mainText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
});
