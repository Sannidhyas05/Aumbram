import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function SignIn({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGetOtpPress = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate('VerifyOTP', { phoneNumber });
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/logo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
          <TouchableOpacity style={styles.button} onPress={handleGetOtpPress}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    height: 350,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(242, 169, 80, 0.33)',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'rgb(0,0,0)',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f2a850',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignIn;   

