import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useContext,createContext} from 'react';
import {UserContext} from "../context/Context";

export default function About() {
    const userName = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text>About context value is {userName}</Text>
     
    </View>
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
