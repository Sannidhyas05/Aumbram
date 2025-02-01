import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Image } from "react-native";

// Import Screens
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import SignIn from "./App/Screens/SignIn";
import VerifyOTP from "./App/Screens/VerifyOTP";
import HomePage from "./App/Screens/HomePage";
import CartPage from "./App/Screens/CartPage";
import CheckoutPage from "./App/Screens/CheckoutPage";
import OrderConfirmationPage from "./App/Screens/OrderConfirmationPage";
import FavouritesPage from "./App/Screens/FavoritesPage";
import ProfilePage from "./App/Screens/ProfilePage";
import ProductListingPage from "./App/Screens/ProductListingPage";
import ProductDetails from "./App/Screens/ProductDetails";
import SearchPage from "./App/Screens/SearchPage";
import MyOrdersPage from "./App/Screens/MyOrdersPage";
import SettingsPage from "./App/Screens/SettingsPage";
import HelpCenter from "./App/Screens/HelpCenter";
import ContactUsPage from "./App/Screens/ContactUsPage";
import InfluencerSupport from "./App/Screens/InfluencerSupport";
import FeedbackPage from "./App/Screens/FeedbackPage";
import PrivacyPolicy from "./App/Screens/PrivacyPolicy";
import TermsPage from "./App/Screens/TermsPage";
import LogoutPage from "./App/Screens/LogoutPage";
import BrandsPage from "./App/Screens/BrandsPage";

// Create Navigators
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// 🟢 Bottom Tabs (Permanent Footer after OTP)
const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: "#fff", height: 60 },
      tabBarIcon: ({ color, size }) => {
        let iconSource;

        if (route.name === "Home") {
          iconSource = require("./App/assets/logo.png");
        } else if (route.name === "Cart") {
          iconSource = require("./App/assets/Icons/bag.png");
        } else if (route.name === "Favourites") {
          iconSource = require("./App/assets/Icons/favourite.png");
        } else if (route.name === "Brands") {
          iconSource = require("./App/assets/Icons/store.png");
        } else if (route.name === "Profile") {
          iconSource = require("./App/assets/Icons/user.png");
        }

        return (
          <Image source={iconSource} style={{ width: size, height: size }} />
        );
      },
    })}
  >
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Cart" component={CartPage} />
    <Tab.Screen name="Favourites" component={FavouritesPage} />
    <Tab.Screen name="Brands" component={BrandsPage} />
    <Tab.Screen name="Profile" component={ProfilePage} />
  </Tab.Navigator>
);

// 🟡 Stack Navigator (Contains All Other Screens)
const MainStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
    }}
  >
    <Stack.Screen
      name="Home"
      component={BottomTabs} // Home now uses Bottom Tabs
      options={{
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("./App/assets/aumbram-golden.png")}
              style={{
                width: 120, // Smaller logo
                height: 30,
                marginLeft: 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ),
      }}
    />
    {/* Additional Screens */}
    <Stack.Screen name="Cart" component={CartPage} />
    <Stack.Screen name="Checkout" component={CheckoutPage} />
    <Stack.Screen name="Order Confirmation" component={OrderConfirmationPage} />
    <Stack.Screen name="Product Listing" component={ProductListingPage} />
    <Stack.Screen name="Product Details" component={ProductDetails} />
    <Stack.Screen name="Search" component={SearchPage} />
    <Stack.Screen name="My Orders" component={MyOrdersPage} />
    <Stack.Screen name="Settings" component={SettingsPage} />
    <Stack.Screen name="Help Center" component={HelpCenter} />
    <Stack.Screen name="Contact Us" component={ContactUsPage} />
    <Stack.Screen name="Influencer Support" component={InfluencerSupport} />
    <Stack.Screen name="Feedback" component={FeedbackPage} />
    <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
    <Stack.Screen name="Terms" component={TermsPage} />
  </Stack.Navigator>
);

// 🔵 Drawer Navigator (Wraps MainStack)
const HomeDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={MainStack}
      options={{ headerShown: false }}
    />
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
    <Drawer.Screen name="Logout" component={LogoutPage} />
  </Drawer.Navigator>
);

// 🚀 Main App (Handles Authentication)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="HomePage" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
