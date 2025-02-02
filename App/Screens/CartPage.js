import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const CartPage = () => {
  const route = useRoute();

  // Provide default values to prevent undefined errors
  const { cartItems: initialCartItems = [], setCartItems = () => {} } =
    route.params || {};

  const [cartItems, updateCart] = useState(initialCartItems);

  useEffect(() => {
    updateCart(initialCartItems);
  }, [initialCartItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.details}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  emptyMessage: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    marginLeft: 15,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
});

export default CartPage;
