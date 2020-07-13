import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tab from './components/Tab/tabs.js';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';
import MessageScreen from './screens/MessageScreen';


import * as firebase from 'firebase';
import FirebaseKeys from '../configFirebase';


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

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}