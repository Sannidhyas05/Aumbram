import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform, StatusBar, ImageBackground } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function VerifyOTP({ navigation, route }) {
  const { phoneNumber, sentOtp } = route.params; 
  const [otp, setOtp] = useState('');

  const hardcodedOTP = "123456";
  const verifyOtpApiCall = async (enteredOtp) => {
    try {
      if (enteredOtp === hardcodedOTP) {
        return { success: true };
      } else {
        return { success: false, message: 'Incorrect OTP. Please try again.' };
      }
    } catch (error) {
      return { success: false, message: 'Something went wrong. Please try again later.' };
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      Alert.alert('Invalid OTP', 'OTP should be a 6-digit code.');
      return;
    }

    const result = await verifyOtpApiCall(otp);
    if (result.success) {
      Alert.alert('Success', 'OTP verified successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('HomePage') },
      ]);
    } else {
      Alert.alert('Error', result.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/logo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>An OTP has been sent to {phoneNumber}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
          />
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Verify</Text>
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
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: .5,
    width: "auto",
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(242, 169, 80, 0.35)',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'rgb(0, 0, 0)',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
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

export default VerifyOTP;
