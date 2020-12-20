import React from 'react'
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
export default function NumberButtons() {
    return (
        <View style={styles.container}>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{console.log('test');}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        
        height:'70%',
     
        flexDirection:"row",
        justifyContent:'center',
        flexWrap:'wrap',

        backgroundColor:"green",
        
    },
    buttonTouch:{
        width:"33%",
        alignItems:'center',
        height:'20%',
        backgroundColor:"#374352",
        borderColor:"#A7B4BB",
        borderWidth:0.2,
        borderRadius:2,

        justifyContent:'center',

    },
    buttonText:{
        color:"white",

    }
  
  });
  