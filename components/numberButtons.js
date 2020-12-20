import React,{ useState } from 'react'
import { StyleSheet,View,Text,TouchableHighlight } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";



export default function NumberButtons(val) {
    const [ip, setip] = useState("");
    const [History, setHistory] = useState("");
    
    
function Basic(n1,n2,op){
    if(op=="+"){
        return Number(n1)+Number(n2);
    }
    
    if(op=="-"){
        return Number(n1)-Number(n2);
    }
    if(op=="/"){
        return Number(n1)/Number(n2);
    }
    if(op=="*"){
        return Number(n1)*Number(n2);
    }
    
}

function GetTotal(){
    var val=History;
    var num1="";
    var num2="";
    var op="";
    var result=null;
    var waiting=false;
    for (let i = 0; i < val.length; i++) {
        var temp=val.charAt(i);
        
        if(temp!='+' &&  temp!='-' &&  temp!='*' && temp!='/'){
            num1+=temp;
            // console.log('Inside if');
            // console.log(temp);
        }
        else{
            if(result==null){
                result=num1;
                num1="";
                waiting=true;
                op=temp;

            }
            else {
                // console.log(result);
                // console.log(num1);
                // console.log(op);
                result=Basic(result,num1,op);
                num1=""
                waiting=false;
                op=temp;


            }
            }
            

        }

        return(Basic(result,num1,op));
       
      }


    function Equals(){
        setHistory("");
        setip(GetTotal());
    }
    function setIp(val){
        console.log(ip)
        var temp=ip+val;
        
        setip(temp);
        setHistory(History+val);
        
    }
    function Operators(val){
        setip("");
        setHistory(History+val);
    }

    function clearIp(){
        setip("");
        setHistory("");
    }
    return (
        <>
                <View style={styles.header}>
      <Text style={styles.equation}>{History}</Text>
      <Text style={styles.headerText}>{ip}</Text>
        </View>
        <View style={styles.container}>
<TouchableHighlight onPress={()=>clearIp()} style={styles.buttonTouchClr}  underlayColor={'red'}>
  <Text style={styles.buttonText}>C</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{Operators("/")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>/</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{Operators("*")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>*</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("7")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>7</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{setIp("8")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>8</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("9")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>9</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{Operators("-")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>-</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{setIp("4")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>4</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("5")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>5</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("6")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>6</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{Operators("+")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>+</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{setIp("1")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>1</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("2")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>2</Text>
  
</TouchableHighlight>

<TouchableHighlight onPress={()=>{setIp("3")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>3</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp(".")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>.</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("0")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>0</Text>
  
</TouchableHighlight>
<TouchableHighlight onPress={()=>{setIp("00")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>00</Text>
  
</TouchableHighlight>
{/* <TouchableHighlight onPress={()=>{setIp(".")}} style={styles.buttonTouch} underlayColor={'red'}>
  <Text style={styles.buttonText}>.</Text>
  
</TouchableHighlight> */}
<TouchableHighlight onPress={()=>{Equals()}} style={[styles.buttonTouch,{width:'50%'}]}  underlayColor={'red'}>
  <Text style={styles.buttonText}>=</Text>
  
</TouchableHighlight>
        </View>
        </>
        
    )
}

const styles = StyleSheet.create({    header: {
        
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

      },

    container:{
        
        height:'70%',
     
        flexDirection:"row",
        justifyContent:'center',
        flexWrap:'wrap',

        backgroundColor:"#A7B4BB",
        
    },
    buttonTouch:{
        width:"25%",
        alignItems:'center',
        height:'20%',
        backgroundColor:"#374352",
        borderColor:"#A7B4BB",
        borderWidth:0.2,
        borderRadius:2,

        justifyContent:'center',

    },
    buttonTouchClr:{
        width:"50%",
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
  