import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

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
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const validateFields = () => {
    const { name, address, city, zip } = shippingDetails;
    const { cardNumber, expiryDate, cvv } = billingDetails;

    if (!name || !address || !city || !zip) {
      Alert.alert("Error", "Please fill in all shipping details.");
      return false;
    }

    if (
      paymentMethod === "Credit/Debit Card" &&
      (!cardNumber || !expiryDate || !cvv)
    ) {
      Alert.alert("Error", "Please fill in all billing details.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateFields()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("OrderConfirmationPage", {
        shippingDetails,
        paymentMethod,
      });
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Checkout</Text>

      <Text style={styles.sectionTitle}>Shipping Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
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
        keyboardType="numeric"
        onChangeText={(text) =>
          setShippingDetails({ ...shippingDetails, zip: text })
        }
      />

      <Text style={styles.sectionTitle}>Payment Method</Text>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}
        >
          <View style={styles.radioOption}>
            <RadioButton value="Credit/Debit Card" />
            <Text>Credit/Debit Card</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="UPI" />
            <Text>UPI</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="Wallet" />
            <Text>Wallet</Text>
          </View>
        </RadioButton.Group>
      </View>

      {paymentMethod === "Credit/Debit Card" && (
        <>
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
            keyboardType="numeric"
          />
        </>
      )}

      <TouchableOpacity
        style={[styles.submitButton, loading && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitButtonText}>Place Order</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#fff", padding: 20 },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#444",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  radioContainer: { marginBottom: 15, paddingLeft: 5 },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  submitButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  disabledButton: { backgroundColor: "#aaa" },
});

export default CheckoutPage;
