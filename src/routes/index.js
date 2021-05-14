import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';

const AppStack = createStackNavigator();

function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#B0E0E6',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#008b8b',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Login">
      <AppStack.Screen
        component={Login}
        name="Login"
        options={{title: 'To Do'}}
      />
      <AppStack.Screen
        component={Home}
        name="Home"
        options={{title: 'Início'}}
      />
    </AppStack.Navigator>
  );
}

export default Routes;
