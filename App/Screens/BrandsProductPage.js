import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const brandsProduct = {
  Nike: [
    {
      id: "1",
      name: "Nike Air Max",
      price: "₹17500",
      image: require("../assets/Nike/airmax.png"),
    },
    {
      id: "2",
      name: "Nike Running Shoes",
      price: "₹1550",
      image: require("../assets/Nike/running.jpeg"),
    },
  ],
  Adidas: [
    {
      id: "3",
      name: "Adidas Ultraboost",
      price: "₹12500",
      image: require("../assets/Adidas/ultraboost.jpeg"),
    },
    {
      id: "4",
      name: "Adidas Classic",
      price: "₹999",
      image: require("../assets/Adidas/classic.jpeg"),
    },
  ],
  HM: [
    {
      id: "5",
      name: "HM Casual Shirt",
      price: "₹899",
      image: require("../assets/HM/HM Casual Shirt.jpeg"),
    },
    {
      id: "6",
      name: "HM Jeans",
      price: "₹1999",
      image: require("../assets/HM/HM Jeans.jpeg"),
    },
  ],
  Zara: [
    {
      id: "7",
      name: "Zara T-Shirt",
      price: "₹999",
      image: require("../assets/Zara/Zara T-Shirt.jpeg"),
    },
    {
      id: "8",
      name: "Zara Jacket",
      price: "₹5999",
      image: require("../assets/Zara/Zara Jacket.jpeg"),
    },
  ],
};

const BrandProductsPage = ({ route, navigation }) => {
  const { brandName } = route.params;

  // Corrected the variable name
  const products = brandsProduct[brandName] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{brandName} Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate("Product Details", { item })} // ✅ FIXED: Changed to Product Details instead of Listing
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Ensure the export matches the filename correctly
export default BrandProductsPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: { width: 100, height: 100, resizeMode: "contain" },
  productName: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  productPrice: { fontSize: 12, color: "#ff6347", marginTop: 3 },
});
