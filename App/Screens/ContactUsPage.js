import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

function ContactUsPage() {
  const handleEmail = () => {
    Linking.openURL("mailto:support@example.com");
  };

  const handleChat = () => {
    alert("Initiating live chat...");
  };

  const handleCall = () => {
    Linking.openURL("tel:+1234567890");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
        <Text style={styles.contactButtonText}>Email Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton} onPress={handleChat}>
        <Text style={styles.contactButtonText}>Chat Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactButton} onPress={handleCall}>
        <Text style={styles.contactButtonText}>Call Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  contactButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    marginBottom: 10,
    alignItems: "center",
  },
  contactButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default ContactUsPage;
