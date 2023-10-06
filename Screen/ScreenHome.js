import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Button, Image, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
const storiesData = [
    { id: 1, image: require('../assets/ramen.jpg'), content: 'Story 1' },
    { id: 2, image: require('../assets/ramen.jpg'), content: 'Story 2' },
    { id: 3, image: require('../assets/ramen.jpg'), content: 'Story 3' },
    { id: 4, image: require('../assets/ramen.jpg'), content: 'Story 3' },
    { id: 5, image: require('../assets/ramen.jpg'), content: 'Story 3' },
    { id: 6, image: require('../assets/ramen.jpg'), content: 'Story 3' },
  ];
function StorySlide() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
        {storiesData.map((story) => (
          <View key={story.id} style={styles.slide}>
            <Image source={story.image} style={styles.imageTop} />
            <Text style={styles.text}>{story.content}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
function Screenhome() {
    const navigation = useNavigation();
    return(
        
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
            <View style={{height: 70, width:'100%',marginBottom:5,justifyContent:'center',}}>
                <TextInput placeholder="Search" style={styles.textInput}></TextInput>
                <></>
            </View>
            <View style={styles.slide}>
                <Text>Next to you</Text>
                <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Next to you')}>
                    <Text>On the map</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 100,backgroundColor:'white', }}>
                <StorySlide>
                </StorySlide >
            </View>
            <View style={styles.slide}>
                <Text>Categories</Text>
                <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Next to you')}>
                    <Text>On the map</Text>
                </TouchableOpacity>
            </View>
                <View style={{height: 150, width:'100%' ,marginBottom:5}}>
                    <View style={styles.content}>

                    </View>
                    <View style={styles.content}>

                    </View>
                    <View style={styles.content}>

                    </View>
                    <View style={styles.content}>

                    </View>
                </View>
                
                
                
            </ScrollView>
        </SafeAreaView>
        ) 
}
export default Screenhome;
const styles = StyleSheet.create({
    safeArea:{
        flex:1,
    },
    container:{
        flex:1,
        width:'98%',
        marginLeft:'1%',
        backgroundColor:'lightgray'
    },
    slide:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-around',
        
    },
    button:{
        height:'100%',
    },
    textInput:{
        width: '70%',height:'70%',textAlign:'center',justifyContent:'center',
        borderRadius:10,
        backgroundColor:'white',
        marginLeft:10,
    },
    content:{
        height:60,
        width:'100%',
        backgroundColor:'white',
        marginTop:5,
    },
    section:{
        width:'100%' , 
        height: 400 ,
        position: 'relative',
        justifyContent:'',
        flexDirection: 'column',
    },
    colum1:{
        width:'100%',
    },
    
    imageTop: {
        width: 100,
        height: 100,
        borderRadius:10,
        marginLeft:5,
        marginRight:5,
    },
   
})
