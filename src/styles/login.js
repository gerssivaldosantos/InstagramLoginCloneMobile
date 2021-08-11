import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    languageContainer:{
       
        height: 50,
        justifyContent:'center'
    },
    languageTitle:{
        color:"#7C7C7C",
        textAlign:'center',
        fontSize: 16.5
    },
    midContainer:{
       padding:32.5, 
       alignItems:'center'
    },
    input:{
        borderStyle:"solid",
        borderColor:"#121212"
    }

})

export default styles;