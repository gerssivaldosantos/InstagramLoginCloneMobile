import React from 'react';
import { Text, View,StatusBar, Image, TextInput } from 'react-native';
import styles from '../styles/login';

export default function Login(){
  return(
    <View style={styles.container}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content"></StatusBar>
    <View style={styles.languageContainer}>
    <Text style={styles.languageTitle}>English (United States)</Text>
    </View>
    <View style={styles.midContainer}>
        <Image source={require("../assets/logo.png")} />
        <TextInput 
        
        style={styles.input}
        placeholder={"Phone number, email or username"} />
    </View>
    </View>
  )
}
