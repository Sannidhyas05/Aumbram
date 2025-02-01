 import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function SignIn({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGetOtpPress = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate('VerifyOTP', { phoneNumber });
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid 10-digit phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/logo.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
            placeholderTextColor="#666"
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#f2a850',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignIn;
