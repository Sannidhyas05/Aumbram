import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { id: 1, name: "Organic Products", image: require("../assets/organic.jpg") },
  { id: 2, name: "Ethical Fashion", image: require("../assets/ethical.jpg") },
  {
    id: 3,
    name: "Sustainable Living",
    image: require("../assets/sustainable.jpg"),
  },
];

const serviceCategories = [
  { id: 1, name: "Consulting", image: require("../assets/consulting.jpg") },
  { id: 2, name: "Courses", image: require("../assets/courses.jpg") },
];

function CategoryPage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Product Categories</Text>
      <View style={styles.gridContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate("CategoryDetail", { category })}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Service Categories</Text>
      <View style={styles.gridContainer}>
        {serviceCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate("ServiceDetail", { category })}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },
  heading: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
    alignItems: "center",
  },
  categoryImage: { width: "100%", height: 120 },
  categoryText: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
});

export default CategoryPage;
