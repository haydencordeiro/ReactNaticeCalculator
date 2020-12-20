import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
      <Text style={styles.equation}>123123+12312</Text>
      <Text style={styles.headerText}>123123+12312</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
        height:"30%",
      backgroundColor:'#3A4655',
    //   justifyContent:'center',
      alignItems:'flex-end',
  
  
    },
    equation:{
        marginTop:30,
        fontSize:20,
      color:'#899BA2',
      marginRight:10,
      marginBottom:40,

        
    },
    headerText:{
      color:'#CDDEED',
      fontSize:35,
      paddingTop:5,
      marginRight:10,
    
          }
  
  });
  