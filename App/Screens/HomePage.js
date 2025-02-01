import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

function HomePage() {
  const [likedItems, setLikedItems] = useState({});
  const navigation = useNavigation();

  // Sample Fashion Items
  const fashionItems = [
    {
      id: 1,
      image: require("../assets/Fasion products/aiony-haust-K0DxxljcRv0-unsplash.jpg"),
      price: "₹1500",
      name: "Trendy Jacket",
      description: "A stylish jacket perfect for all seasons.",
      rating: 4.5,
    },
    {
      id: 2,
      image: require("../assets/Fasion products/brooke-cagle-dGK3ynaDNCI-unsplash.jpg"),
      price: "₹1750",
      name: "Elegant Dress",
      description: "An elegant dress for special occasions.",
      rating: 4.7,
    },
    {
      id: 3,
      image: require("../assets/Fasion products/darko-mitev-c5t_j1zlk1Y-unsplash.jpg"),
      price: "₹7150",
      name: "Casual Shirt",
      description: "A comfortable shirt for daily wear.",
      rating: 4.3,
    },
    {
      id: 4,
      image: require("../assets/Fasion products/dom-hill-nimElTcTNyY-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 5,
      image: require("../assets/Fasion products/gabriel-benois-sVIBH6dMIlI-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 6,
      image: require("../assets/Fasion products/good-faces-IL1oeY0pN2k-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 7,
      image: require("../assets/Fasion products/kal-visuals-d5GlpSOAzzg-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 8,
      image: require("../assets/Fasion products/tamara-bellis-IwVRO3TLjLc-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 9,
      image: require("../assets/Fasion products/tamara-bellis-U2ymajzuqFk-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
    {
      id: 10,
      image: require("../assets/Fasion products/zahir-namane-TjUJJACTav4-unsplash.jpg"),
      price: "₹1450",
      name: "Summer T-shirt",
      description: "Light and breathable t-shirt for hot days.",
      rating: 4.0,
    },
  ];

  const vendors = [
    { id: 1, name: "Vendor A", image: require("../assets/adidad.png") },
    { id: 2, name: "Vendor B", image: require("../assets/nike.jpeg") },
    // { id: 3, name: 'Vendor C', image: require('../assets/Vendors/vendor3.png') },
    // Additional vendors
  ];

  const toggleLike = (id, item) => {
    setLikedItems((prevLikes) => {
      const newLikes = { ...prevLikes };
      if (newLikes[id]) {
        delete newLikes[id];
      } else {
        newLikes[id] = item;
      }
      return newLikes;
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search Bar */}
          <View style={styles.searchBar}>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => navigation.navigate("Search")}
            >
              <Image
                source={require("../assets/Icons/Search.png")}
                style={{ width: 500, height: 370, resizeMode: "contain" }} // Keeps proportions
              />
            </TouchableOpacity>
          </View>

          {/* Categories Section */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
          >
            <TouchableOpacity style={styles.categoryButton}>
              <Image
                style={styles.categoryImage}
                source={require("../assets/pretty-woman-with-yellow-dress.jpg")}
              />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryText}>Fashion</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Image
                style={styles.categoryImage}
                source={require("../assets/portrait-beautiful-smiling-cute-model-with-pink-lips-girl-summer-colorful-dress-model-posing-showing-peace-sign-giving-kiss.jpg")}
              />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryText}>Beauty</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryButton}>
              <Image
                style={styles.categoryImage}
                source={require("../assets/logo.png")}
              />
              <View style={styles.categoryOverlay}>
                <Text style={styles.categoryText}>Home</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Vendors Banner */}
          <Text style={styles.sectionHeading}>Top Vendors</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.vendorBanner}
          >
            {vendors.map((vendor) => (
              <TouchableOpacity
                key={vendor.id}
                style={styles.vendorCard}
                onPress={() => navigation.navigate("VendorPage", { vendor })}
              >
                <Image source={vendor.image} style={styles.vendorImage} />
                <Text style={styles.vendorName}>{vendor.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Promotional Banners */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.banner}>
              <Image
                style={styles.bannerImage}
                source={require("../assets/female-shop-friend-women-market.jpg")}
              />
              <View style={styles.bannerOverlay}>
                <Text style={styles.bannerText}>FLAT ₹300 OFF</Text>
              </View>
            </View>
            <View style={styles.saleBanner}>
              <Text style={styles.saleText}>50-80% OFF</Text>
              <Text style={styles.saleSubText}>
                Celebrate India, Celebrate Fashion
              </Text>
            </View>
          </ScrollView>

          {/* Fashion Section */}
          <Text style={styles.sectionHeading}>Fashion</Text>
          <View style={styles.gridContainer}>
            {fashionItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridItem}
                onPress={() => navigation.navigate("Product Listing", { item })}
              >
                <Image source={item.image} style={styles.productImage} />
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => toggleLike(item.id, item)}
                >
                  <Image
                    source={
                      likedItems[item.id]
                        ? require("../assets/red-304570_1280.png")
                        : require("../assets/heart.png")
                    }
                    style={styles.likeIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Favorites", { likedItems })
                  }
                ></TouchableOpacity>

                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  logoText: { fontSize: 24, fontWeight: "bold", color: "#000" },
  headerIcons: { flexDirection: "row" },
  icon: { width: 30, height: 30, marginHorizontal: 10 },
  searchBar: {
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchInput: { height: 40, fontSize: 14 },
  sectionHeading: { fontSize: 18, fontWeight: "bold", margin: 10 },
  vendorBanner: { paddingLeft: 10, marginBottom: 20 },
  vendorCard: { alignItems: "center", marginRight: 15 },
  vendorImage: { width: 80, height: 80, borderRadius: 40 },
  vendorName: { marginTop: 5, fontSize: 12, fontWeight: "500" },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: { width: (screenWidth - 30) / 2, marginBottom: 20 },
  productImage: { width: "100%", height: 200, borderRadius: 10 },
  likeButton: { position: "absolute", top: 10, right: 10 },
  likeIcon: { width: 33, height: 30 },
  productName: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  productPrice: { fontSize: 14, color: "gray" },

  searchButton: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  categories: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    width: screenWidth * 0.3,
    height: 150,
    borderRadius: 20,
    marginRight: 10,
    overflow: "hidden",
    position: "relative", // Important for overlay positioning
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "absolute",
  },
  categoryOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    zIndex: 1, // Ensure it appears above the overlay
  },

  banner: {
    position: "relative",
    height: 200,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  saleBanner: {
    backgroundColor: "#f2a850",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  saleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  saleSubText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});

export default HomePage;
