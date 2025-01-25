import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get the screen width and height
const { width: screenWidth } = Dimensions.get('window');

function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [likedItems, setLikedItems] = useState({});
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // Sample data
  const fashionItems = [
    { id: 1, image: require('../assets/Fasion products/aiony-haust-K0DxxljcRv0-unsplash.jpg'), price: '₹1500' },
    { id: 2, image: require('../assets/Fasion products/brooke-cagle-dGK3ynaDNCI-unsplash.jpg'), price: '₹1750' },
    { id: 3, image: require('../assets/Fasion products/darko-mitev-c5t_j1zlk1Y-unsplash.jpg'), price: '₹7150' },
    { id: 4, image: require('../assets/Fasion products/dom-hill-nimElTcTNyY-unsplash.jpg'), price: '₹1450' },
  ];

  const categories = [
    { name: 'Fashion', image: require('../assets/portrait-beautiful-smiling-cute-model-with-pink-lips-girl-summer-colorful-dress-model-posing-showing-peace-sign-giving-kiss.jpg') },
    { name: 'Beauty', image: require('../assets/pretty-woman-with-yellow-dress.jpg') },
    { name: 'Health & Fitness', image: require('../assets/female-shop-friend-women-market.jpg') },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
    setIsButtonClicked(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

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

  const handleBuyNowClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logoText}>Aumbram</Text>
            <View style={styles.headerIcons}>
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
              placeholder="Search for products"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Categories */}
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

          {/* Fashion Section */}
          <Text style={styles.sectionHeading}>Fashion</Text>
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
                <Text style={styles.priceText}>{selectedItem.price}</Text>
                <View style={styles.modalFooter}>
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
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  headerIcons: { flexDirection: 'row' },
  icon: { width: 30, height: 30, marginHorizontal: 10 },
  searchBar: { margin: 10, backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10 },
  searchInput: { height: 40, fontSize: 14 },
  categories: { marginVertical: 20 },
  categoryButton: { marginRight: 10 },
  categoryImage: { width: 150, height: 150, justifyContent: 'center' },
  categoryOverlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 },
  categoryText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  sectionHeading: { fontSize: 18, fontWeight: 'bold', margin: 10 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: (screenWidth - 30) / 2, marginBottom: 20 },
  productImage: { width: '100%', height: 200, borderRadius: 10 },
  likeButton: { position: 'absolute', top: 10, right: 10 },
  likeIcon: { width: 30, height: 30 },
  buyNowButton: { position: 'absolute', bottom: 10, left: 10, backgroundColor: '#000', padding: 10, borderRadius: 5 },
  clickedBuyNowButton: { backgroundColor: '#ff6347' },
  buyNowText: { color: '#fff' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)' },
  modalOverlay: { flex: 1 },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: screenWidth - 40 },
  fullImage: { width: '100%', height: 300, borderRadius: 10 },
  priceText: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  modalFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  cartButton: { backgroundColor: '#f2a850', padding: 10, borderRadius: 5 },
  buyButton: { backgroundColor: '#f2a850', padding: 10, borderRadius: 5 },
  closeButton: { backgroundColor: '#ccc', padding: 10, borderRadius: 5 },
  closeButtonText: { color: '#000' },
});

export default HomePage;