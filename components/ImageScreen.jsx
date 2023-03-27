import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  View,
  useColorScheme,
} from "react-native";
import React from "react";

export default function ImageScreen() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={[
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
      indicatorStyle={"white"}
    >
      <View style={imageStyle.imageView}>
        <Image
          style={imageStyle.image}
          source={require("../img/logo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little lemon logo"
        />
        <Text
          style={[
            imageStyle.headingText,
            colorScheme === "light" ? "black" : "#EDEFEE",
          ]}
        >
          Little Lemon
        </Text>
      </View>
      <Text
        style={[
          imageStyle.mainText,
          colorScheme === "light" ? "black" : "#EDEFEE",
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}

const imageStyle = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  imageView: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
  },
  headingText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    textAlign: "center",
  },
  mainText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
});
