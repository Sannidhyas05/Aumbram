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
  const navigation = useNavigation();
  const product = route?.params?.product; // Safe access

  // If product is undefined, show a loading or error message
  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product details not available</Text>
      </View>
    );
  }

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || null
  );

  return (
    <ScrollView style={styles.container}>
      {/* Image Slider */}
      <View style={styles.imageSlider}>
        {selectedImage ? (
          <Image source={selectedImage} style={styles.mainImage} />
        ) : (
          <Text style={styles.errorText}>No images available</Text>
        )}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {product.images?.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
              <Image source={img} style={styles.thumbnail} />
            </TouchableOpacity>
          )) || <Text style={styles.errorText}>No images found</Text>}
        </ScrollView>
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>
          {product.name || "Unnamed Product"}
        </Text>
        <Text style={styles.productPrice}>₹{product.price || "N/A"}</Text>
        <Text style={styles.availability}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </Text>
        <Text style={styles.description}>
          {product.description || "No description available"}
        </Text>
        <Text style={styles.certifications}>
          Sustainability: {product.certifications || "Not certified"}
        </Text>
      </View>

      {/* Vendor Information */}
      {product.vendor ? (
        <TouchableOpacity
          style={styles.vendorContainer}
          onPress={() =>
            navigation.navigate("VendorPage", { vendor: product.vendor })
          }
        >
          <Image source={product.vendor.image} style={styles.vendorImage} />
          <Text style={styles.vendorName}>{product.vendor.name}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.errorText}>Vendor information unavailable</Text>
      )}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Reviews */}
      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      {product.reviews && product.reviews.length > 0 ? (
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
      ) : (
        <Text style={styles.errorText}>No reviews available</Text>
      )}

      {/* Related Products */}
      <Text style={styles.sectionTitle}>Related Products</Text>
      {product.relatedProducts && product.relatedProducts.length > 0 ? (
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
      ) : (
        <Text style={styles.errorText}>No related products found</Text>
      )}
    </ScrollView>
  );
};

// Error Styling
const styles = StyleSheet.create({
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 16, color: "red", textAlign: "center", margin: 10 },
  // Keep the existing styles...
});

export default ProductDetails;
