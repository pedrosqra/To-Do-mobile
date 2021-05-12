import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Home">
      <AppStack.Screen
        component={Home}
        name="Home"
        options={{title: 'Início'}}
      />
    </AppStack.Navigator>
  );
}

export default Routes;
