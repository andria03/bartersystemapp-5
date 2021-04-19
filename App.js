import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default function App() {
  return (
    <View>
      <WelcomeScreen/>
    </View>
  );
  const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    HomeScreen:{screen: HomeScreen },
    ExchangeScreen: {screen: ExchangeScreen},
  })
}



