import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default class App extends React.Component {
  return (
    <View>
      <AppContainer/>
    </View>
  );
  
}

const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    HomeScreen:{screen: HomeScreen },
    ExchangeScreen: {screen: ExchangeScreen},
  })

var AppContainer = createAppContainer(switchNAvigator);



