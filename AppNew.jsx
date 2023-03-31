import { View, Text } from "react-native";
import React from "react";
import RootNavigator from "./navigators/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";

export default function AppNew() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
}
