import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';
import RegisterScreen from '../screens/register';
import ScreenHeader from '../screens/register/components/header';
import HomeHeader from '../screens/home/components/Header';
import EditScreen from '../screens/editTask/index';
import AddTaskScreen from '../screens/addTask/index';
import TaskScreen from '../screens/taskScreen/index';

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
          fontSize: 28,
        },
      }}
      initialRouteName="Login">
      <AppStack.Screen
        component={Login}
        name="Login"
        options={{title: 'To Do'}}
      />
      <AppStack.Screen
        component={RegisterScreen}
        name="Register"
        options={{
          headerTitle: () => <ScreenHeader />,
          headerStyle: {backgroundColor: '#6a5acd'},
          headerTintColor: '#fff',
        }}
      />
      <AppStack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: () => <HomeHeader />,
          headerStyle: {backgroundColor: '#6a5acd'},
          headerTintColor: '#fff',
        }}
      />
      <AppStack.Screen
        component={EditScreen}
        name="Edit"
        options={{
          headerTitle: 'Editar Tarefa',
          headerStyle: {backgroundColor: '#6a5acd'},
          headerTintColor: '#fff',
        }}
      />
      <AppStack.Screen
        component={AddTaskScreen}
        name="Add"
        options={{
          headerTitle: 'Adicionar Tarefa',
          headerStyle: {backgroundColor: '#6a5acd'},
          headerTintColor: '#fff',
        }}
      />
      <AppStack.Screen
        component={TaskScreen}
        name="TaskScreen"
        options={{
          headerTitle: 'Detalhes',
          headerStyle: {backgroundColor: '#6a5acd'},
          headerTintColor: '#fff',
        }}
      />
    </AppStack.Navigator>
  );
}

export default Routes;
