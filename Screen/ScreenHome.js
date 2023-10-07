import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Button, Image, ScrollView,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
const storiesData = [
    { id: 1, image: require('../assets/slide1.png'), content: 'CLOTHING' },
    { id: 2, image: require('../assets/slide2.png'), content: 'ACCESSORIES' },
    { id: 3, image: require('../assets/slide3.png'), content: 'SHOES' },
  ];
const newArrival = [
    { id: 4, image: require('../assets/arri2.png'), content: 'CLOTHING' },
    { id: 5, image: require('../assets/arri2.png'), content: 'Sweet Never Salty Mini Dress'},
    { id: 6, image: require('../assets/arri2.png'), content: 'CLOTHING'},
];
const Featured = [
    { id: 7, image: require('../assets/arri2.png'), content: 'CLOTHING' },
    { id: 8, image: require('../assets/featured2.png'), content: 'Sweet Never Salty Mini Dress'},
    { id: 9, image: require('../assets/featured3.png'), content: 'CLOTHING'},
];

function StorySlide() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
        {storiesData.map((story) => (
          <View key={story.id} style={styles.slidecontain}>
                <View style={[styles[`slide${story.id}`]]}>
                    <Image source={story.image} style={styles.imageTop} />
                    <Text style={styles.textslide}>{story.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
  function SlideArri() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newArrival.map((story) => (
          <View key={story.id} style={styles.SlideArri}>
                <View style={[styles[`slide${story.id}`]]}>
                    <Image source={story.image} style={styles.imageArri} />
                    <Text style={styles.textArri}>{story.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
  function SlideFeatured() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Featured.map((story) => (
          <View key={story.id} style={styles.SlideArri}>
                <View style={[styles[`slide${story.id}`]]}>
                    <Image source={story.image} style={styles.imageArri} />
                    <Text style={styles.textArri}>{story.content}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
function Screenhome() {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.Group}>
                <View style={styles.Group1}>
                    <Text style={styles.shoper}>Shopertino</Text>
                    <Image style={styles.hamburger} source = {require('../assets/harmburger-icon.png')}/>
                    <Image style={styles.shopping} source = {require('../assets/shopping-bag-filled.png')}/>
                    <View style={styles.Line}></View>
                </View>
            </View>    
            <ScrollView style={styles.container}>
            <View style={styles.slide}>
                <StorySlide>
                </StorySlide >
            </View>
            <View style={{alignItems:'center',marginTop:20,marginBottom:20,}}>
                <Text style={{fontSize:20,}}>New Arrival</Text>
            </View>
            <View style={styles.slideArri}>
                <SlideArri>
                </SlideArri >
            </View>
            <View style={{marginTop:20,marginBottom:20,}}>
                <Text style={{fontSize:20,}}>Featured</Text>
            </View>
            <View style={styles.slideFeatured}>
                <SlideFeatured>
                </SlideFeatured >
            </View>
            <View style={{marginTop:20,marginBottom:20,}}>
                <Text style={{fontSize:20,}}>Best Seller</Text>
            </View>
            <View style={styles.section4}>
                <View style={styles.section41}>
                    <Image style={styles.bestsell} source = {require('../assets/sell1.png')}/>
                    <Image style={styles.bestsell} source = {require('../assets/sell2.png')}/>
                </View>
                <View style={styles.section42}>
                    <Image style={styles.bestsell} source = {require('../assets/sell3.png')}/>
                    <Image style={styles.bestsell} source = {require('../assets/sell4.png')}/>
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
        
    },
    Group:{
        height:37,
        backgroundColor:'white',
        width:375,
    },
    Group1:{
        position: 'absolute',
        height:25,
        width:375,
        top:3,
    },
    Line:{
        top:33,
        backgroundColor:'white',
        borderColor:'black',
        borderBottomWidth: 1,
    },
    shoper:{
        position: 'absolute',
        left: '40%',
        top: 0,
        height: 21,
        top:3,
        fontSize: 17,
        textAlign: 'center',
    },
    hamburger:{
        position: 'absolute',
        left: 20,
        top: 0,
        width: 25,
        height: 25,
    },
    shopping:{
        position: 'absolute',
        left: 320,
        top: 0,
        width: 25,
        height: 25,
    },
    slide:{
        marginTop:20,
    },
    imageTop: {
        width: 144,
        height: 66,
        position: 'absolute',  
        opacity:0.7,
    },
    slide1: {    
        backgroundColor:'black', 
        width: 144,
        height: 66,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginRight:20,
      },
    slide2: {   
        width: 144,
        height: 66,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginRight:20,
    },
    slide3: { 
        backgroundColor:'black',
        width: 144,
        height: 66,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textslide:{
        color:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    slide4:{
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginRight:20,
    },
    slide5:{
        
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    slide6:{
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginRight:20,
    },
    imageArri:{
        height:366,
        width:243,
        
    },
    textArri:{
        
    },
    section41:{
        flexDirection:'row',
    },
    section42:{
        flexDirection:'row',
    },
    bestsell:{
        height:100,
        width:100,
    },
})
