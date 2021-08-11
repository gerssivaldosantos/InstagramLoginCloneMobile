import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent:"space-between"
    },
    languageContainer: {

        height: 50,
        justifyContent: 'center'
    },
    languageTitle: {
        color: "#9C9C9C",
        textAlign: 'center',
        fontSize: 16.5
    },
    midContainer: {
        padding: 32.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderStyle: "solid",
        borderColor: "#9999",
        fontSize: 17.5,
        borderWidth: 0.8,
        borderRadius: 7,
        padding: 16,
        marginTop: 20,
        width: "100%"
    },
    logButton: {
        marginTop: 20,
        backgroundColor: "#0095f6",
        padding: 20,
        width: "100%",
        borderRadius: 7
    },
    logText: {
        textAlign: 'center',
        fontSize: 18.5,
        fontWeight: 'bold',
        color: "white"
    },
    forgotContainer: {
        marginTop: 20,
        flexDirection: 'row'
    },
    smallText: {
        color: "#9C9C9C",
        fontSize: 15
    },
    forgotButton: {

    },
    smallButtonText: {
        fontSize: 15,
        color: "#00386b",
        fontWeight: 'bold'
    },
    orContainer: {

        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    orText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: "#11111158"
    },
    line: {

        backgroundColor: "#80808060",
        height: 1,
        width: "43%"
    },
    logFacebookContainer:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    logoContainer:{
        
        width:33,
        height:33,
        borderRadius:35,
        backgroundColor:"#0095f6",
        alignItems:'center',
        justifyContent:'center'
    },
    logoText:{
        marginTop:8,
        color:"white",
        fontSize:38,
        fontWeight:'bold'
    },
    logFacebookText:{
        marginLeft:7,
        color:"#0095f6",
        fontSize:18,
        fontWeight:'bold'
    },
    footerContainer:{
        height:"10%",
        width:"100%",
        
    },
    line2: {

        backgroundColor: "#80808085",
        height: 1,
        width: "100%"
    }


})

export default styles;