import * as React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [showError, setShowError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const isEmailValid = validateEmail(email);

  const handleEmailInput = (value) => {
    setEmail(value);
    if (value.length > 0 && !isEmailValid) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <View style={style.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/little-lemon-logo-grey.png")}
        style={{ width: 100, height: 100, margin: 20 }}
      />
      <Text style={style.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={style.textInput}
        placeholder="Enter your email"
        onChangeText={handleEmailInput}
        value={email}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      {showError && (
        <Text style={style.errorText}>Please enter correct email</Text>
      )}
      <Pressable
        style={[
          { backgroundColor: !isEmailValid ? "grey" : '#495E57' },
          style.buttonWrap,
        ]}
        disabled={!isEmailValid}
        onPress={() => {
          if (!showError) {
            Alert.alert("Thanks for subscribing,stay tuned!");
            setEmail("");
          }
        }}
      >
        <Text style={style.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    margin: 20,
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    height: 40,
    padding: 8,
    fontSize: 15,
  },
  buttonWrap: {
    width: 350,
    borderRadius: 5,
    margin: 20,
    padding: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    fontWeight: 500,
    marginLeft: 22,
    marginTop: 5,
  },
});

export default SubscribeScreen;
