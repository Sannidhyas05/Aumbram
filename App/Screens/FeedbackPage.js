import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim()) {
      Alert.alert(
        "Thank you for your feedback!",
        "We appreciate your input and will consider it for future improvements."
      );
      setFeedback(""); // Clear the feedback input after submission
    } else {
      Alert.alert("Error", "Please enter your feedback before submitting.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback and Suggestions</Text>
      <Text style={styles.text}>
        We value your feedback and suggestions to improve our app. Please share
        your thoughts below:
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, color: "#555", marginBottom: 15 },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    height: 150,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  submitButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default FeedbackPage;
