import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

function CartPage() {
  const { cartItems } = useCart(); // ✅ Get cartItems from CartContext

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>
                {item.name} - {item.price}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  emptyCart: { fontSize: 16, color: "#888" },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontSize: 18 },
});

export default CartPage;
