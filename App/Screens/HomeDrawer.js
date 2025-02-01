import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import SignIn from "./App/Screens/SignIn";
import CartPage from "./App/Screens/CartPage";
import CheckoutPage from "./App/Screens/CheckoutPage";
import OrderConfirmationPage from "./App/Screens/OrderConfirmationPage";
import SettingsPage from "./App/Screens/SettingsPage";
import HelpCenter from "./App/Screens/HelpCenter";
import ContactUsPage from "./App/Screens/ContactUsPage";
import PrivacyPolicy from "./App/Screens/PrivacyPolicy";
import TermsPage from "./App/Screens/TermsPage";

// Create Navigators
const Drawer = createDrawerNavigator();

// Custom Drawer Content with Log Out Button at the Bottom
const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Other Drawer Items */}
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.drawerItem}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
          <Text style={styles.drawerItem}>Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order Confirmation")}
        >
          <Text style={styles.drawerItem}>Order Confirmation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.drawerItem}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Help Center")}>
          <Text style={styles.drawerItem}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact Us")}>
          <Text style={styles.drawerItem}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacy Policy")}>
          <Text style={styles.drawerItem}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
          <Text style={styles.drawerItem}>Terms</Text>
        </TouchableOpacity>
      </View>

      {/* Log Out Button at the Bottom */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("SignIn")} // Navigate to the SignIn screen
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Drawer Navigator
const HomeDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomePage} />
    <Drawer.Screen name="Cart" component={CartPage} />
    <Drawer.Screen name="Checkout" component={CheckoutPage} />
    <Drawer.Screen
      name="Order Confirmation"
      component={OrderConfirmationPage}
    />
    <Drawer.Screen name="Settings" component={SettingsPage} />
    <Drawer.Screen name="Help Center" component={HelpCenter} />
    <Drawer.Screen name="Contact Us" component={ContactUsPage} />
    <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
    <Drawer.Screen name="Terms" component={TermsPage} />
    {/* Do not need to add LogOut here since it's in the custom drawer content */}
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  drawerItem: {
    fontSize: 18,
    padding: 10,
  },
  logoutButton: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FF6347",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeDrawer;
