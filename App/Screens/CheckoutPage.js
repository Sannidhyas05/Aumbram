import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function CheckoutPage() {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [billingDetails, setBillingDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("OrderConfirmationPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>

      {/* Shipping Details */}
      <Text style={styles.sectionTitle}>Shipping Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={shippingDetails.name}
        onChangeText={(text) =>
          setShippingDetails({ ...shippingDetails, name: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={shippingDetails.address}
        onChangeText={(text) =>
          setShippingDetails({ ...shippingDetails, address: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={shippingDetails.city}
        onChangeText={(text) =>
          setShippingDetails({ ...shippingDetails, city: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        value={shippingDetails.zip}
        onChangeText={(text) =>
          setShippingDetails({ ...shippingDetails, zip: text })
        }
      />

      {/* Billing Details */}
      <Text style={styles.sectionTitle}>Billing Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={billingDetails.cardNumber}
        onChangeText={(text) =>
          setBillingDetails({ ...billingDetails, cardNumber: text })
        }
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={billingDetails.expiryDate}
        onChangeText={(text) =>
          setBillingDetails({ ...billingDetails, expiryDate: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={billingDetails.cvv}
        onChangeText={(text) =>
          setBillingDetails({ ...billingDetails, cvv: text })
        }
        secureTextEntry
      />

      {/* Payment Method */}
      <Text style={styles.sectionTitle}>Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Payment Method (Credit/Debit Card, UPI, Wallet)"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default CheckoutPage;
