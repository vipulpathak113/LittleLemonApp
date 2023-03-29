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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler"; // added for drawer navigation

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const ImageDrawer = () => (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Welcome" component={ImageScreen} />
      <Drawer.Screen name="Section" component={SectionItems} />
    </Drawer.Navigator>
  );

  const ImageTabbed = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Welcome2") {
            iconName = focused
              ? "information-outline"
              : "information-circle-outline";
          } else if (route.name === "Menu") {
            iconName = "list-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Welcome2" component={ImageDrawer} />
      <Tab.Screen name="Menu" component={MenuItems} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <View style={appStyle.appView}>
        <Header />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerTitleAlign: "center" }}
        >
          <Stack.Screen
            name="Welcome"
            component={ImageTabbed}
            options={{ headerShown: false }}
          />
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
