import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
      <Text style={styles.headerText}>Calculator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        height:60,
      backgroundColor:'#2C4058',
      
  
  
    },
    headerText:{
      color:'white',
      fontSize:35,
      paddingTop:5,
    
          }
  
  });
  