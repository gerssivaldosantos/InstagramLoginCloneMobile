import React from 'react';
import { Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/login';

export default function Login() {
  return (
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
        <TextInput

          style={styles.input}
          placeholder={"Password"} />
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.forgotContainer}>
          <Text style={styles.smallText}>Forgot your login details?</Text>
          <TouchableOpacity
            style={styles.forgotButton}
          >
            <Text style={styles.smallButtonText}> Get help logging in.</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.orContainer}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={styles.logFacebookContainer}>
          <View style={styles.logoContainer}><Text style={styles.logoText}>f</Text></View>
          <Text style={styles.logFacebookText}>Log in with Facebook</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.footerContainer}>
        <View style={styles.line2} />
        <View style={{

          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center',
          marginTop:20
        }}>
          <Text style={styles.smallText}>Don`t have an account? </Text>

          <TouchableOpacity>

            <Text style={styles.smallButtonText}>Sign up.</Text>

          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}
