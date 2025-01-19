import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function VerifyOTP({ navigation, route }) {
  const { phoneNumber, sentOtp } = route.params; // Assume OTP is passed as a param (from previous screen)
  const [otp, setOtp] = useState('');

  // Hardcoded OTP for testing
  const hardcodedOTP = "123456";
  // Mock OTP verification function, replace it with API call to verify OTP
  const verifyOtpApiCall = async (enteredOtp) => {
    try {
      // Simulating an API call to verify OTP
      if (enteredOtp === hardcodedOTP /*sentOtp*/) {
        // OTP verified successfully
        return { success: true };
      } else {
        // OTP incorrect
        return { success: false, message: 'Incorrect OTP. Please try again.' };
      }
    } catch (error) {
      return { success: false, message: 'Something went wrong. Please try again later.' };
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      // Validate OTP length
      Alert.alert('Invalid OTP', 'OTP should be a 6-digit code.');
      return;
    }

    const result = await verifyOtpApiCall(otp);
    if (result.success) {
      // If OTP is correct, navigate to the HomePage
      Alert.alert('Success', 'OTP verified successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('HomePage') }, // Navigate to HomePage
      ]);
    } else {
      // If OTP is incorrect, show error
      Alert.alert('Error', result.message);
    }
  };

  return (
    <View style={styles.container}>
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
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f2a850',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyOTP;
