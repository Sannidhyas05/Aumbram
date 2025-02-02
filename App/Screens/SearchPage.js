import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchPage = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const data = {
    categories: [
      { name: "T-Shirts", image: require("../assets/Search/tshirts.webp") },
      { name: "Jeans", image: require("../assets/Search/jeans.jpeg") },
      { name: "Sneakers", image: require("../assets/Search/sneakers.jpeg") },
      { name: "Dresses", image: require("../assets/Search/dresses.jpeg") },
    ],
    trending: [
      {
        name: "Summer Collection",
        image: require("../assets/Search/summerwear.jpeg"),
      },
      {
        name: "Festive Wear",
        image: require("../assets/Search/festivewear.jpeg"),
      },
      {
        name: "Sportswear",
        image: require("../assets/Search/athleisure.jpeg"),
      },
      {
        name: "Casual Wear",
        image: require("../assets/Search/officewear.jpeg"),
      },
    ],
    brands: [
      { name: "Nike", image: require("../assets/nike.jpeg") },
      { name: "Adidas", image: require("../assets/adidad.png") },
      { name: "H&M", image: require("../assets/Search/hm.jpeg") },
      { name: "Zara", image: require("../assets/Search/zara.jpeg") },
    ],
    offers: [
      {
        name: "Flat 50% Off",
        image: require("../assets/Search/objects/50%_off[1].webp"),
      },
      {
        name: "Buy 1 Get 1",
        image: require("../assets/Search/objects/buy1get1[1].webp"),
      },
    ],
  };

  const filteredData = {
    categories: data.categories.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    trending: data.trending.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    brands: data.brands.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    offers: data.offers.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Navigation with Back Button */}
      <View style={styles.topBar}>
        <Text style={styles.pageTitle}>Search</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products, brands, offers..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Display Sections */}
      <Section title="Popular Categories" data={filteredData.categories} />
      <Section title="Trending Now" data={filteredData.trending} />
      <Section title="Featured Brands" data={filteredData.brands} />
      <Section title="Best Offers" data={filteredData.offers} />
    </ScrollView>
  );
};

const Section = ({ title, data }) =>
  data.length > 0 && (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {data.map((item, index) => (
          <CategoryCard key={index} image={item.image} name={item.name} />
        ))}
      </ScrollView>
    </View>
  );

const CategoryCard = ({ image, name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductList", { category: name })}
    >
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    resizeMode: "contain",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  horizontalScroll: {
    flexDirection: "row",
  },
  card: {
    width: 140,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
    paddingVertical: 10,
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
});

export default SearchPage;
