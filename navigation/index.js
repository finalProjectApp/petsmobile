import React from "react";
import { View, Text, Platform } from "react-native";
import { Image, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { Plus } from "../components/icons";

// Authentication Stack //
import ConfirmScreen from "../screens/authScreens/confirm";
import ForgotScreen from "../screens/authScreens/forgot";
import LoginScreen from "../screens/authScreens/login";
import RegisterScreen from "../screens/authScreens/register";
import WelcomeScreen from "../screens/authScreens/welcome";


// Private Dashboard Stack //
import PetsScreen from "../screens/dashboardScreens/pets";
import ProfileScreen from "../screens/dashboardScreens/profile";


//Pets Stack
import PetsDetailsScreen from "../screens/dashboardScreens/pets/PetDetails";
import CreatePetScreen from "../screens/dashboardScreens/pets/CreatePet";


const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const PetsStackNavigator = createStackNavigator();
export const PetsStack = () => {
    return (
        <PetsStackNavigator.Navigator>
            <PetsStackNavigator.Screen name="PetsScreen" component={PetsScreen} options={{ headerShown: false }}/>
            <PetsStackNavigator.Screen name="PetDetailsScreen" component={PetsDetailsScreen} />
            <PetsStackNavigator.Screen name="CreatePet" component={CreatePetScreen} options={{headerShown: false,}}/>
        </PetsStackNavigator.Navigator>
    )
}
export const Auth = () => {
    return (
        // <NavigationContainer>
            <AuthStack.Navigator screenOptions={{headerShown:false}}>
                <AuthStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
                <AuthStack.Screen name="Login" component={LoginScreen}/>
                <AuthStack.Screen name="Register" component={RegisterScreen}/>
                <AuthStack.Screen name="Forgot" component={ForgotScreen}/>
                <AuthStack.Screen name="Confirm" component={ConfirmScreen}/>
            </AuthStack.Navigator>
        // </NavigationContainer>
    );
  }

const screenOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: 'green',
  tabBarInactiveTintColor: 'blue',
  tabBarStyle: {
    position: 'absolute',
    bottom: Platform.OS === "ios" ? -10: 0, 
    left: 0, right: 0,
    elevation: 0,
    height: Platform.OS === "ios" ? 80 : 60,
    backgroundColor: '#fff',
  },
}


export const MyTabs = () => {
  return (
    // <NavigationContainer >
        <Tab.Navigator screenOptions={screenOptions} name="MyTabs">
            <Tab.Screen name="Pets" component={PetsStack} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Entypo color={focused ? '#16247d' : '#111'} name="baidu" size={24}/>
                    <Text style={{fontSize: 12, color: '#16247d'}}>PETS</Text>
                  </View>
                ),
                headerRight: () => (<Plus />),
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Entypo color={focused ? '#16247d' : '#111'} name="user" size={28} />
                    <Text style={{color: '#16247d', fontSize: 12}}>PROFILE</Text>
                  </View>
                  ),
                headerStyle:{backgroundColor:null},
                headerShadowVisible: false,
                headerLeft:() => (<TouchableOpacity onPress={()=>Alert.alert('Menu Button Pressed')}><Entypo name="menu" size={40} color={'#c6c'}/></TouchableOpacity>),
                headerRight: () => (<TouchableOpacity onPress={()=>Alert.alert('Account Button Pressed')}><Image source={require('../assets/catdog.jpeg')} style={{height:40,width:40,marginRight:10}}/></TouchableOpacity>)}}
            />
        </Tab.Navigator>
    // </NavigationContainer>
  );
}


