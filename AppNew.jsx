import { View, Text } from 'react-native'
import React from 'react'
import RootNavigator from './navigators/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'

export default function AppNew() {
  return (
    <NavigationContainer>
    <View style={{flex:1}}>
      <RootNavigator/>
    </View>
    </NavigationContainer>
  )
}