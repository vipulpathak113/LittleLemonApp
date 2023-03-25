import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>Login to continue </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleEmail}
          placeholder="email"
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={handlePassword}
          placeholder="password"
          value={password}
          secureTextEntry={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
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
