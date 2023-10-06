import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Home from './ScreenHome';
function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>
      <TextInput style={styles.TextInput}
        placeholder="Email"
      />
      <TextInput style={styles.TextInput}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{marginBottom: 20, marginTop:15}}> Forget your password? </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{marginTop: 20,}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightgray',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  TextInput: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingLeft: '20%',
  },
  button: {
    width: '70%',
    height: 40,
    borderColor: 'gray',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'lightblue',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
  }
});

export default LoginScreen;
