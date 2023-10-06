import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './ScreenHome';
import Favorite from './ScreenCollec';
import Chat from './ScreenSaved';
import Friend from './Search';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//main screen 

function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false,swipeEnabled: true, }} /> 
        <Tab.Screen name="Collection" component={Favorite} options={{ headerShown: false ,swipeEnabled: true,}} />
        <Tab.Screen name="Next to you" component={Chat} options={{ headerShown: true }}/>
        <Tab.Screen name="Search" component={Friend} options={{ headerShown: false }}/>
      </Tab.Navigator>
    );
  }
export default function ScreenhomeTab(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
        )
};
