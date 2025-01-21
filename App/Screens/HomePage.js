import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get the screen width and height
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected item
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility
  const [likedItems, setLikedItems] = useState({}); // Store liked items as an object
  const [isButtonClicked, setIsButtonClicked] = useState(false); // To track if 'Buy Now' is clicked

  // Sample data
  const fashionItems = [
    { id: 1, image: require('../assets/Fasion products/aiony-haust-K0DxxljcRv0-unsplash.jpg'), price: '₹1500' },
    { id: 2, image: require('../assets/Fasion products/brooke-cagle-dGK3ynaDNCI-unsplash.jpg'), price: '₹1750' },
    { id: 3, image: require('../assets/Fasion products/darko-mitev-c5t_j1zlk1Y-unsplash.jpg'), price: '₹7150' },
    { id: 4, image: require('../assets/Fasion products/dom-hill-nimElTcTNyY-unsplash.jpg'), price: '₹1450' },
    { id: 5, image: require('../assets/Fasion products/gabriel-benois-sVIBH6dMIlI-unsplash.jpg'), price: '₹5450' },
    { id: 6, image: require('../assets/Fasion products/good-faces-IL1oeY0pN2k-unsplash.jpg'), price: '₹5750' },
    { id: 7, image: require('../assets/Fasion products/kal-visuals-d5GlpSOAzzg-unsplash.jpg'), price: '₹4750' },
    { id: 8, image: require('../assets/Fasion products/tamara-bellis-IwVRO3TLjLc-unsplash.jpg'), price: '₹3750' },
    { id: 9, image: require('../assets/Fasion products/tamara-bellis-U2ymajzuqFk-unsplash.jpg'), price: '₹2750' },
    { id: 10, image: require('../assets/Fasion products/zahir-namane-TjUJJACTav4-unsplash.jpg'), price: '₹6750' },
  ];

  const categories = [
    { name: 'Fashion', image: require('../assets/pretty-woman-with-yellow-dress.jpg') },
    { name: 'Beauty', image: require('../assets/portrait-beautiful-smiling-cute-model-with-pink-lips-girl-summer-colorful-dress-model-posing-showing-peace-sign-giving-kiss.jpg') },
    { name: 'Health & Fitness', image: require('../assets/ryan-hoffman-AwV3LiHm-XM-unsplash.jpg') },
  ];

  // Open modal with the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
    setIsButtonClicked(false); // Reset the Buy Now button state when opening the modal
  };

  // Close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  // Enhanced toggleLike function
  const toggleLike = (id, item) => {
    setLikedItems((prevLikes) => {
      const newLikes = { ...prevLikes };
      if (newLikes[id]) {
        delete newLikes[id]; // Remove item from liked items if already liked
      } else {
        newLikes[id] = item; // Add item to liked items if not already liked
      }
      return newLikes;
    });
  };

  // Handle Buy Now button click
  const handleBuyNowClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.logoText}>Aumbram</Text>
            <View style={styles.rightIcons}>
              <TouchableOpacity>
                <Image source={require('../assets/bell.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Favorites', { likedItems })}>
                <Image source={require('../assets/heart.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/user.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for Text"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Categories Section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <ImageBackground source={category.image} style={styles.categoryImage}>
                  <View style={styles.categoryOverlay}>
                    <Text style={styles.categoryText}>{category.name}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Banner */}
          <View style={styles.banner}>
            <Image
              style={styles.bannerImage}
              source={require('../assets/female-shop-friend-women-market.jpg')}
            />
            <View style={styles.bannerOverlay}>
              <Text style={styles.bannerText}>FLAT ₹300 OFF</Text>
            </View>
          </View>

          {/* Fashion Section */}
          <Text style={styles.heading}>Fashion</Text>
          <View style={styles.gridContainer}>
            {fashionItems.map((item) => (
              <View key={item.id} style={styles.gridItem}>
                <Image source={item.image} style={styles.productImage} />
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => toggleLike(item.id, item)}
                >
                  <Image
                    source={
                      likedItems[item.id]
                        ? require('../assets/red-304570_1280.png')
                        : require('../assets/heart.png')
                    }
                    style={styles.likeIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={isButtonClicked ? styles.clickedBuyNowButton : styles.buyNowButton}
                  onPress={() => {
                    handleBuyNowClick();
                    openModal(item);
                  }}
                >
                  <Text style={styles.buyNowText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* Modal */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image source={selectedItem.image} style={styles.fullImage} />
                <Text style={styles.footerPrice}>{selectedItem.price}</Text>
                <View style={styles.footer}>
                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  searchBar: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 14,
    color: '#000',
  },
  categories: {
    marginTop: 20,
  },
  categoryButton: {
    marginRight: 10,
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  banner: {
    marginTop: 20,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 250,
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(197, 19, 19, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 100,
    borderRadius: 5,
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridItem: {
    width: (screenWidth - 30) / 2,
    marginBottom: 20,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  likeIcon: {
    width: 40,
    height: 37,
  },
  buyNowButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  clickedBuyNowButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#ff6347',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyNowText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(235, 147, 16, 0.7)',
  },
  modalOverlay: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: screenWidth - 40,
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  footerPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cartButton: {
    backgroundColor: '#f2a850',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#fff',
  },
  buyButton: {
    backgroundColor: '#f2a850',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#ccc',
  },
  closeButtonText: {
    color: '#000',
  },
});

export default HomePage;
