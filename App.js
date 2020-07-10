import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import HomeScreen from './src/screens/HomeScreen';
import MessageScreen from './src/screens/MessageScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import PostScreen from './src/screens/PostScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import * as firebase from 'firebase';
import FirebaseKeys from './configFirebase';


// Initialize Firebase
var firebaseConfig = FirebaseKeys;
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Loading">
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
