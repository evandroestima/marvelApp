import React, { useState, useEffect, useRef } from 'react';
import api from './src/services/api';
import apiKey from './src/services/config/apiKey';
import { Routes } from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/pages/mainScreen';
import List from './src/components/list'
import Details from './src/components/detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
