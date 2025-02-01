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
  { id: "4", name: "zara", logo: require("../assets/Search/zara.jpeg") },
  //   { id: "5", name: "Gucci", logo: require("../assets/gucci-logo.png") },
  //   { id: "6", name: "Louis Vuitton", logo: require("../assets/lv-logo.png") },
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
            onPress={() => alert(`Selected ${item.name}`)}
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
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
  brandLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  brandName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   StyleSheet,
// } from "react-native";
// import { useBrands } from "../Context/BrandsContext"; // Import context

// const BrandsPage = () => {
//   const { brands, addBrand } = useBrands(); // Access brands and addBrand function
//   const [newBrand, setNewBrand] = useState("");
//   const [newBrandLogo, setNewBrandLogo] = useState("");

//   const handleAddBrand = () => {
//     if (newBrand && newBrandLogo) {
//       addBrand({
//         id: `${brands.length + 1}`,
//         name: newBrand,
//         logo: { uri: newBrandLogo },
//       });
//       setNewBrand("");
//       setNewBrandLogo("");
//     } else {
//       alert("Please provide both brand name and logo.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Brands</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Brand Name"
//         value={newBrand}
//         onChangeText={setNewBrand}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Brand Logo URL"
//         value={newBrandLogo}
//         onChangeText={setNewBrandLogo}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={handleAddBrand}>
//         <Text style={styles.addButtonText}>Add Brand</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={brands}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.brandCard}>
//             <Image source={item.logo} style={styles.brandLogo} />
//             <Text style={styles.brandName}>{item.name}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff", padding: 10 },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
//   addButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   addButtonText: { color: "#fff", fontSize: 16 },
//   brandCard: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 15,
//     margin: 10,
//     borderRadius: 10,
//   },
//   brandLogo: { width: 80, height: 80, resizeMode: "contain" },
//   brandName: { fontSize: 16, fontWeight: "bold", marginTop: 8 },
// });

// export default BrandsPage;
// // screens/BrandsPage.js
// // import React, { useEffect } from "react";
// // import { View, Text, Button } from "react-native";
// // import { useBrands } from "../Context/BrandsContext"; // Correct import

// // const BrandsPage = () => {
// //   const { brands, addBrand } = useBrands();

// //   useEffect(() => {
// //     // Example: Add a brand when the page loads
// //     addBrand("Nike");
// //   }, [addBrand]);

// //   return (
// //     <View>
// //       <Text>Brands:</Text>
// //       {brands.map((brand, index) => (
// //         <Text key={index}>{brand}</Text>
// //       ))}
// //       <Button title="Add Brand" onPress={() => addBrand("Adidas")} />
// //     </View>
// //   );
// // };

// // export default BrandsPage;
