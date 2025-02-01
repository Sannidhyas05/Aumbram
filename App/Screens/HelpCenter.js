import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function HelpCenter() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Go to the settings page and click on 'Forgot Password'.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order through the 'Track Order' section in your account.",
    },
    {
      question: "How can I update my payment method?",
      answer:
        "Go to your profile and select 'Payment Methods' to update your details.",
    },
    {
      question: "What should I do if I receive a damaged item?",
      answer:
        "Contact our support team through the 'Contact Us' page to report the issue.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Help Center</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  faqContainer: { marginBottom: 20 },
  question: { fontSize: 18, fontWeight: "bold" },
  answer: { fontSize: 16, color: "#555", marginTop: 5 },
});

export default HelpCenter;
