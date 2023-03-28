import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

  const handleLogin = () => {
    console.log("Log in pressed");
    setIsLogin(!isLogin);
    navigation.navigate('Welcome')
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
          <>
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
            <Pressable style={styles.buttonView} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </>
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
    color: "black",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "black",
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
  buttonView: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
  },
});


            

          