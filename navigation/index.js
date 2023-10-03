import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import ConfirmScreen from "../screens/authScreens/confirm";
import ForgotScreen from "../screens/authScreens/forgot";
import LoginScreen from "../screens/authScreens/login";
import RegisterScreen from "../screens/authScreens/register";
import WelcomeScreen from "../screens/authScreens/welcome";
import LocationScreen from "../screens/dashboardScreens/location";
import NewsScreen from "../screens/dashboardScreens/news";
import PetsScreen from "../screens/dashboardScreens/pets";
import ProfileScreen from "../screens/dashboardScreens/profile";
import StoreScreen from "../screens/dashboardScreens/store";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MyStack = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
                <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
                <AuthStack.Screen name="Login" component={LoginScreen}/>
                <AuthStack.Screen name="Register" component={RegisterScreen}/>
                <AuthStack.Screen name="Forgot" component={ForgotScreen}/>
                <AuthStack.Screen name="Confirm" component={ConfirmScreen}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
  }




export const MyTabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarActiveTintColor:"green",tabBarInactiveTintColor:"blue"}} >
            <Tab.Screen name="Pets" component={PetsScreen} 
              options={{
                tabBarLabel: "pets",
                tabBarIcon: ({color}) => (
                  <Entypo color={color} name="baidu" size={28}/>)}}
            />
            <Tab.Screen name="News" component={NewsScreen} 
              options={{
                tabBarLabel: "news",
                tabBarIcon: ({color}) => (
                  <Entypo color={color} name="list" size={28}/>)}}
            />
            <Tab.Screen name="Location" component={LocationScreen}
              options={{
                tabBarLabel: "maps", 
                tabBarIcon: ({color}) => (
                  <Entypo color={color} name="map" size={28} />)}} 
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
              options={{
                tabBarLabel: "profile", 
                tabBarIcon: ({color}) => (
                  <Entypo color={color} name="user" size={28} />),
                headerStyle:{backgroundColor:null},
                headerShadowVisible: false,
                headerLeft:() => (<TouchableOpacity onPress={()=>Alert.alert('Menu Button Pressed')}><Entypo name="menu" size={40} color={'#c6c'}/></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity onPress={()=>Alert.alert('Account Button Pressed')}><Image source={require('../assets/catdog.jpeg')} style={{height:40,width:40,marginRight:10}}/></TouchableOpacity>)}}
            />
            <Tab.Screen name="Store" component={StoreScreen} 
              options={{
                tabBarLabel: "store", 
                tabBarIcon: ({color}) => (
                  <Entypo color={color} name="shop" size={28} />)}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
