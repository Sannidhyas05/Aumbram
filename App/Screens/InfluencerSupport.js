import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function InfluencerSupport() {
  const contentSupportInfo = [
    {
      title: "Content Guidelines",
      description:
        "Learn the best practices for creating engaging and brand-safe content.",
    },
    {
      title: "Video Optimization",
      description:
        "Tips on optimizing your videos for maximum reach and engagement.",
    },
    {
      title: "Technical Support",
      description:
        "Get help with video editing, upload issues, and platform tools.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Support for Influencers & Video Creators
      </Text>
      {contentSupportInfo.map((item, index) => (
        <View key={index} style={styles.supportItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  supportItem: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: "bold" },
  description: { fontSize: 16, color: "#555", marginTop: 5 },
  learnMoreButton: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  learnMoreText: { color: "#fff", fontSize: 16 },
});

export default InfluencerSupport;
