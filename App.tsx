import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import SectionItems from "./components/SectionItems";
import Input from "./components/TextInput";
import LoginScreen from "./components/LoginScreen";
import ImageScreen from "./components/ImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={appStyle.appView}>
        <Header />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={ImageScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={appStyle.appFooter}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const appStyle = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: "#333333",
  },
  appFooter: { backgroundColor: "#EE9972" },
});
