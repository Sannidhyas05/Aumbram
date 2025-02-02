import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

function ProductListingPage({ route, navigation }) {
  // Ensure item, cartItems, and setCartItems exist, with safe defaults
  const { item, cartItems = [], setCartItems = () => {} } = route.params || {};

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: Product not found</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleAddToCart = () => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    navigation.navigate("Cart", { cartItems: updatedCart, setCartItems });
  };

  const handleBuyNow = () => {
    navigation.navigate("Checkout", { item }); // Navigate to checkout
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productRating}>Rating: {item.rating} ⭐</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, color: "red" },
  imageContainer: {
    width: screenWidth,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  productImage: { width: "90%", height: "100%" },
  productName: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  productPrice: { fontSize: 20, color: "#ff6347", marginVertical: 10 },
  productDescription: { fontSize: 16, color: "#555", marginVertical: 10 },
  productRating: { fontSize: 16, color: "#888", marginVertical: 10 },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  cartButton: { backgroundColor: "#f2a850", padding: 10, borderRadius: 5 },
  buyButton: { backgroundColor: "#ff6347", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  backButton: { alignSelf: "center", marginTop: 20 },
  backText: { color: "#000", textDecorationLine: "underline" },
});

export default ProductListingPage;
