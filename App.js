import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import BuyScreen from './screens/BuyScreen'
import Apology from './screens/Apology';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Dashboard" component={HomeScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
          <Drawer.Screen name="Quote" component={BuyScreen} />
          <Drawer.Screen name="Sorry" component={Apology} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
