import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import logo from "./assets/logo.png";

export default function App() {
  let [text,setText] = useState("");
  let [password,setPassword] = useState("");
  function formValidate() {
    if (text=="" || password=="") {
      alert("Enter the All input Field");
    }
    else {
      alert(`Username: ${text} Password: ${password}`)
    }
  }
  return (
    <View style={styles.container}>
      <Image source={logo} style = {{width:310,height:200,marginBottom:5}}/>

      <Text style={styles.text}>Username</Text>
      <TextInput placeholder="Username" style = {styles.field} defaultValue={text} onChangeText = {(newtext)=> setText(newtext)}/>
      <Text style={styles.text}>Password</Text>
      <TextInput  placeholder="Password" style = {styles.field} dafaultValue = {password} onChangeText = {(newpsw)=> setPassword(newpsw)}/>
      <TouchableOpacity onPress={formValidate} style={{backgroundColor:'blue',padding:10,borderRadius:10,marginTop:5}}>
        <Text style={{fontSize:20,color:'white'}}>Submit</Text>
      </TouchableOpacity>
      
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    width:250,
    height:40,
    padding:5,
    margin:10,
    borderWidth:1,
    borderColor:"black",
    fontSize:20,
    borderRadius:5
  },
  text : {
    fontSize:20
  }
});
