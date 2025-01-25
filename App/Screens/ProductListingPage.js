// ProductListingPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Picker } from 'react-native';

function ProductListingPage({ navigation }) {
  const [products, setProducts] = useState([
    { id: '1', name: 'Product 1', image: require('../assets/Fasion products/aiony-haust-K0DxxljcRv0-unsplash.jpg'), price: 1500, rating: 4.5, category: 'Fashion' },
    { id: '2', name: 'Product 2', image: require('../assets/Fasion products/brooke-cagle-dGK3ynaDNCI-unsplash.jpg'), price: 1750, rating: 4.2, category: 'Beauty' },
    { id: '3', name: 'Product 3', image: require('../assets/Fasion products/darko-mitev-c5t_j1zlk1Y-unsplash.jpg'), price: 2150, rating: 4.8, category: 'Health' },
    // Add more product data here
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === 'All' || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Rating') return b.rating - a.rating;
      return a.id - b.id; // Default: Newest
    });

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>
      <Text style={styles.productRating}>Rating: {item.rating}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => navigation.navigate('Cart', { product: item })}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Picker
          selectedValue={selectedCategory}
          style={styles.filterPicker}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="All Categories" value="All" />
          <Picker.Item label="Fashion" value="Fashion" />
          <Picker.Item label="Beauty" value="Beauty" />
          <Picker.Item label="Health" value="Health" />
        </Picker>

        <Picker
          selectedValue={sortOption}
          style={styles.filterPicker}
          onValueChange={(itemValue) => setSortOption(itemValue)}
        >
          <Picker.Item label="Newest" value="Newest" />
          <Picker.Item label="Price: Low to High" value="Price: Low to High" />
          <Picker.Item label="Price: High to Low" value="Price: High to Low" />
          <Picker.Item label="Rating" value="Rating" />
        </Picker>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterPicker: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  productList: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 10,
    backgroundColor: '#f2a850',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductListingPage;