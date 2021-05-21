import {StatusBar} from 'expo-status-bar'
import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";


import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))


import BaseScreen from "./screens/BaseScreen";
import HomeScreen from "./screens/HomeScreen";
import CameraThing from "./screens/CameraThing";
import Landing from "./screens/Landing";
import Register from "./screens/Register"
import Login from "./screens/Login"
import Main from "./screens/Main"
import CameraSim from "./screens/CameraSim"

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAlE79tm-kEt8PWrmgJMBd0lUr5uSjCgA0",
  authDomain: "clara1-45cfc.firebaseapp.com",
  projectId: "clara1-45cfc",
  storageBucket: "clara1-45cfc.appspot.com",
  messagingSenderId: "929028605067",
  appId: "1:929028605067:web:6c86fa82cc909a8565008e",
  measurementId: "G-2FYKPTMQ5W"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }
      else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const {loggedIn, loaded} = this.state;
    if (!loaded) {
      return (
        <View style ={{flex:1, justifyContent: 'center'}}>
          <Text>
            Loading
          </Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Landing">
            <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(screenOptions) => <HomeScreen {...screenOptions} />}
            </Stack.Screen>
            <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="BaseScreen" options={{headerShown: false}}>
              {(screenOptions) => <BaseScreen {...screenOptions} />}
            </Stack.Screen>
            <Stack.Screen name="Camera" options={{headerShown: false}}>
              {(screenOptions) => <CameraThing {...screenOptions} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
export default App
