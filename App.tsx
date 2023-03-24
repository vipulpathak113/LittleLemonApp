import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={appStyle.appView}>
        <Header />
        <MenuItems/>
      </View>
      <View style={appStyle.appFooter}>
        <Footer />
      </View>
    </>
  );
}

const appStyle = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: "#333333",
  },
  appFooter: { backgroundColor: "#EE9972" },
});
