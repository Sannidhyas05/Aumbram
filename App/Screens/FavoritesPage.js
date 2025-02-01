import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const FavouritesPage = () => {
  const route = useRoute();
  const { likedItems = {} } = route.params || {}; // Default to an empty object if undefined

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favourites</Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Object.keys(likedItems).length === 0 ? (
          <Text style={styles.noFavourites}>No favourites yet!</Text>
        ) : (
          Object.values(likedItems).map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 20,
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  noFavourites: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});

export default FavouritesPage;
