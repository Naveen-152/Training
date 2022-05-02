import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useContext,createContext,useState,useMemo} from 'react';
import Home from "./screens/Home";
import About from "./screens/About";
import {UserContext} from "./context/Context";

export default function App() {
  const [userName,setUserName] = useState("Naveen");
 

  return (
    <>
    <View style={styles.container}>
      <Text>pass the name "Naveen" to Home and About component</Text>
      <StatusBar style="auto" />
    </View>
    <UserContext.Provider value = {userName}>
      <Home />
      <About />
    </UserContext.Provider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
