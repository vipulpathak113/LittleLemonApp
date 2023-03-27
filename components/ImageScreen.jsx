import { Text, ScrollView, StyleSheet, Image, View } from "react-native";
import React from "react";

export default function ImageScreen() {
  return (
    <ScrollView indicatorStyle={"white"}>
      <View style={imageStyle.imageView}>
        <Image
          style={imageStyle.image}
          source={require("../img/logo.png")}
          resizeMode="cover"
          accessible= {true}
          accessibilityLabel="Little lemon logo"
                     
        />
        <Text style={imageStyle.headingText}>Little Lemon</Text>
      </View>
      <Text style={imageStyle.mainText}>
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
    borderRadius:20
  },
  imageView:{
    flexDirection: "row",
    margin:10,
    justifyContent:"center",
  },
  headingText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
