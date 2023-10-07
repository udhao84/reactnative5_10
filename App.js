import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

// Các màn hình con cho thanh điều hướng dưới
import Login from './Screen/Login';
import Main from './Screen/ScreenMain';
import Home from './Screen/ScreenHome';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

// Các màn hình con cho mỗi tab
function Tab1Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab 1 Content</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab 2 Content</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Màn hình chính (Stack Navigator)
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
