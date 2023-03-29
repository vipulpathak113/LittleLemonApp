import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/little-lemon-logo.png")}
          style={{ width: 300, height: 200 }}
        />
        <Text style={style.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={style.buttonWrap}
        onPress={() => {
          navigation.navigate("Subscribe");
        }}
      >
        <Text style={style.buttonText}>Newsletter</Text>
      </Pressable>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 40,
    paddingVertical:10,
    textAlign:"center"
  },
  buttonWrap: {
    backgroundColor: '#495E57',
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
});

export default WelcomeScreen;
