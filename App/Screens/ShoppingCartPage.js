import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: require("../assets/product1.jpg"),
      name: "Trendy Jacket",
      price: "₹1500",
      quantity: 1,
    },
    {
      id: 2,
      image: require("../assets/product2.jpg"),
      name: "Elegant Dress",
      price: "₹1750",
      quantity: 2,
    },
  ]);
  const navigation = useNavigation();

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Shopping Cart</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={item.image} style={styles.cartImage} />
          <View style={styles.cartInfo}>
            <Text style={styles.cartName}>{item.name}</Text>
            <Text style={styles.cartPrice}>{item.price}</Text>
            <Text style={styles.cartQuantity}>Qty: {item.quantity}</Text>
            <View style={styles.cartActions}>
              <TouchableOpacity
                onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Text style={styles.cartActionText}>Increase</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                <Text style={styles.cartActionText}>Decrease</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.cartActionText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate("CheckoutPage")}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  cartItem: { flexDirection: "row", marginBottom: 20 },
  cartImage: { width: 80, height: 80, borderRadius: 10 },
  cartInfo: { marginLeft: 15, flex: 1 },
  cartName: { fontSize: 18, fontWeight: "bold" },
  cartPrice: { fontSize: 16, color: "#555" },
  cartQuantity: { fontSize: 14, marginVertical: 5 },
  cartActions: { flexDirection: "row", justifyContent: "space-between" },
  cartActionText: { color: "#007BFF" },
  checkoutButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default ShoppingCartPage;
