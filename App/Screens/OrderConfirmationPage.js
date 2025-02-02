import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const OrderConfirmationPage = () => {
  const route = useRoute();
  const { shippingDetails, paymentMethod } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Confirmation</Text>

      {shippingDetails ? (
        <>
          <Text style={styles.text}>Name: {shippingDetails.name}</Text>
          <Text style={styles.text}>Address: {shippingDetails.address}</Text>
          <Text style={styles.text}>City: {shippingDetails.city}</Text>
          <Text style={styles.text}>Zip Code: {shippingDetails.zip}</Text>
          <Text style={styles.text}>Payment Method: {paymentMethod}</Text>
        </>
      ) : (
        <Text style={styles.errorText}>No order details found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 10 },
  errorText: { fontSize: 18, color: "red" },
});

export default OrderConfirmationPage;
