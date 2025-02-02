import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

function VerifyOTP({ navigation, route }) {
  const { phoneNumber } = route.params; // Route parameters
  const [otp, setOtp] = useState("");

  const hardcodedOTP = "123456";

  const verifyOtpApiCall = async (enteredOtp) => {
    try {
      if (enteredOtp === hardcodedOTP) {
        return { success: true };
      } else {
        return { success: false, message: "Incorrect OTP. Please try again." };
      }
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "OTP should be a 6-digit code.");
      return;
    }

    const result = await verifyOtpApiCall(otp);
    if (result.success) {
      Alert.alert("Success", "OTP verified successfully!", [
        { text: "OK", onPress: () => navigation.navigate("HomePage") },
      ]);
    } else {
      Alert.alert("Error", result.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/logo.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>
            An OTP has been sent to {phoneNumber}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
            placeholderTextColor="#666"
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
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  contentContainer: {
    width: "85%",
    alignItems: "center",
    padding: 25,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#f2a850",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default VerifyOTP;
