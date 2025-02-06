import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const brandBanners = {
  Nike: require("../assets/Nike/banner.jpg"),
  Adidas: require("../assets/Adidas/banner.jpg"),
  HM: require("../assets/HM/banner.jpg"),
  Zara: require("../assets/Zara/banner.jpg"),
};

const brandsProduct = {
  Nike: [
    {
      id: "1",
      name: "Nike Air Max",
      price: "₹17500",
      image: require("../assets/Nike/airmax.png"),
      description: "Experience the comfort and style of Nike Air Max.",
      rating: "4.5",
    },
    {
      id: "2",
      name: "Nike Running Shoes",
      price: "₹1550",
      image: require("../assets/Nike/running.jpeg"),
      description: "Lightweight and durable running shoes for all terrains.",
      rating: "4.2",
    },
  ],
  Adidas: [
    {
      id: "3",
      name: "Adidas Ultraboost",
      price: "₹12500",
      image: require("../assets/Adidas/ultraboost.jpeg"),
      description: "Adidas Ultraboost provides energy return and comfort.",
      rating: "4.7",
    },
    {
      id: "4",
      name: "Adidas Classic",
      price: "₹999",
      image: require("../assets/Adidas/classic.jpeg"),
      description: "Classic Adidas sneakers for everyday wear.",
      rating: "4.0",
    },
  ],
  HM: [
    {
      id: "5",
      name: "HM Casual Shirt",
      price: "₹899",
      image: require("../assets/HM/HM Casual Shirt.jpeg"),
      description: "A stylish casual shirt for every occasion.",
      rating: "4.3",
    },
    {
      id: "6",
      name: "HM Jeans",
      price: "₹1999",
      image: require("../assets/HM/HM Jeans.jpeg"),
      description: "Comfortable and stretchable jeans for daily wear.",
      rating: "4.4",
    },
  ],
  Zara: [
    {
      id: "7",
      name: "Zara T-Shirt",
      price: "₹999",
      image: require("../assets/Zara/Zara T-Shirt.jpeg"),
      description: "Premium quality cotton T-shirt from Zara.",
      rating: "4.6",
    },
    {
      id: "8",
      name: "Zara Jacket",
      price: "₹5999",
      image: require("../assets/Zara/Zara Jacket.jpeg"),
      description: "Trendy and warm jacket for all seasons.",
      rating: "4.8",
    },
  ],
};
const BrandProductsPage = ({ route, navigation }) => {
  const { brandName } = route.params;

  // Get products and banner
  const products = brandsProduct[brandName] || [];
  const bannerImage = brandBanners[brandName];

  return (
    <View style={styles.container}>
      {/* Banner Image */}
      {bannerImage && <Image source={bannerImage} style={styles.banner} />}

      <Text style={styles.header}>{brandName} Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate("Product Details", { item })}
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

export default BrandProductsPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  banner: {
    width: "100%",
    height: 500, // Adjust as needed
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
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
