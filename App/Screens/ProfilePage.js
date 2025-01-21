import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}></View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN/SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Orders</Text>
        <Text style={styles.menuItemSubText}>Check your order status</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Help Center</Text>
        <Text style={styles.menuItemSubText}>Help regarding your recent purchases</Text>
      </View>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Favourites', { likedItems: {} })}
      >
        <Text style={styles.menuItemText}>Wishlist</Text>
        <Text style={styles.menuItemSubText}>Your most loved styles</Text>
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Scan for coupon</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerItem}>FAQs</Text>
        <Text style={styles.footerItem}>ABOUT US</Text>
        <Text style={styles.footerItem}>TERMS OF USE</Text>
        <Text style={styles.footerItem}>PRIVACY POLICY</Text>
        <Text style={styles.footerItem}>GRIEVANCE REDRESSAL</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 40,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#ff5757',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  menuItem: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemSubText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  footerItem: {
    fontSize: 14,
    color: '#757575',
    paddingVertical: 5,
  },
});

export default ProfilePage;
