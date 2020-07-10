import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCB3P_v2WBkvDwBt8CSAclipgxKWB5Zz24",
  authDomain: "social-app-test-aa052.firebaseapp.com",
  databaseURL: "https://social-app-test-aa052.firebaseio.com",
  projectId: "social-app-test-aa052",
  storageBucket: "social-app-test-aa052.appspot.com",
  messagingSenderId: "278682826940",
  appId: "1:278682826940:web:5ff98bb03a50cd61d0b8b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  }, {
    initialRouteName: 'Loading'
  })
);