import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <ScrollView style={styles.container}>
      {/* Image Slider */}
      <View style={styles.imageSlider}>
        <Image source={selectedImage} style={styles.mainImage} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {product.images.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
              <Image source={img} style={styles.thumbnail} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>₹{product.price}</Text>
        <Text style={styles.availability}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.certifications}>
          Sustainability: {product.certifications}
        </Text>
      </View>

      {/* Vendor Information */}
      <TouchableOpacity
        style={styles.vendorContainer}
        onPress={() =>
          navigation.navigate("VendorPage", { vendor: product.vendor })
        }
      >
        <Image source={product.vendor.image} style={styles.vendorImage} />
        <Text style={styles.vendorName}>{product.vendor.name}</Text>
      </TouchableOpacity>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy </Text>
        </TouchableOpacity>
      </View>

      {/* Customer Reviews */}
      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      <FlatList
        data={product.reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reviewItem}>
            <Text style={styles.reviewerName}>{item.name}</Text>
            <Text style={styles.reviewText}>{item.review}</Text>
            <Text style={styles.rating}>⭐ {item.rating}/5</Text>
          </View>
        )}
      />

      {/* Related Products */}
      <Text style={styles.sectionTitle}>Related Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {product.relatedProducts.map((related) => (
          <TouchableOpacity
            key={related.id}
            style={styles.relatedProductCard}
            onPress={() =>
              navigation.navigate("ProductDetails", { product: related })
            }
          >
            <Image source={related.image} style={styles.relatedImage} />
            <Text style={styles.relatedProductName}>{related.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageSlider: { alignItems: "center", marginVertical: 10 },
  mainImage: { width: 300, height: 300, borderRadius: 10 },
  thumbnail: { width: 60, height: 60, margin: 5, borderRadius: 10 },
  detailsContainer: { padding: 15 },
  productTitle: { fontSize: 20, fontWeight: "bold" },
  productPrice: { fontSize: 18, color: "#d32f2f", marginVertical: 5 },
  availability: { fontSize: 14, color: "green" },
  description: { fontSize: 14, color: "#333", marginVertical: 5 },
  certifications: { fontSize: 14, color: "#555", marginVertical: 5 },
  vendorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
  },
  vendorImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  vendorName: { fontSize: 16, fontWeight: "bold" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  addToCartButton: { backgroundColor: "#ff9800", padding: 10, borderRadius: 5 },
  buyNowButton: { backgroundColor: "#d32f2f", padding: 10, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", padding: 15 },
  reviewItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  reviewerName: { fontWeight: "bold" },
  reviewText: { color: "#555" },
  rating: { color: "#ff9800" },
  relatedProductCard: { alignItems: "center", margin: 10 },
  relatedImage: { width: 100, height: 100, borderRadius: 10 },
  relatedProductName: { fontSize: 14, textAlign: "center" },
});

export default ProductDetails;
