import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function PrivacyPolicy() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Privacy Policy</Text>
      <Text style={styles.text}>
        This Privacy Policy outlines the information we collect and how it is
        used and protected. By using this app, you consent to the collection and
        use of your data in accordance with this policy.
      </Text>
      <Text style={styles.subheading}>1. Information We Collect</Text>
      <Text style={styles.text}>
        We collect personal information such as your name, email address, and
        payment details when you use our services.
      </Text>
      <Text style={styles.subheading}>2. Use of Information</Text>
      <Text style={styles.text}>
        The information we collect is used to process your orders, provide
        customer support, and improve our services.
      </Text>
      <Text style={styles.subheading}>3. Data Security</Text>
      <Text style={styles.text}>
        We implement a variety of security measures to ensure the safety of your
        personal information.
      </Text>
      <Text style={styles.subheading}>Terms of Use</Text>
      <Text style={styles.text}>
        By using this app, you agree to abide by our Terms of Use, which include
        the rules for interacting with our platform and using our services.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  subheading: { fontSize: 20, fontWeight: "bold", marginTop: 15 },
  text: { fontSize: 16, color: "#555", marginTop: 5 },
});

export default PrivacyPolicy;
