import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const brands = [
  { id: "1", name: "Nike", logo: require("../assets/nike.jpeg") },
  { id: "2", name: "Adidas", logo: require("../assets/adidad.png") },
  { id: "3", name: "HM", logo: require("../assets/Search/hm.jpeg") },
  { id: "4", name: "Zara", logo: require("../assets/Search/zara.jpeg") },
];

const BrandsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Brands</Text>
      <FlatList
        data={brands}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.brandCard}
            onPress={() =>
              navigation.navigate("Brand Products", { brandName: item.name })
            }
          >
            <Image source={item.logo} style={styles.brandLogo} />
            <Text style={styles.brandName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BrandsPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  brandCard: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  brandLogo: { width: 80, height: 80, resizeMode: "contain" },
  brandName: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
});
