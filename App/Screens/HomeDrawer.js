import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import MyOrdersPage from './MyOrdersPage';
import FavoritesPage from './FavoritesPage';
import TermsPage from './TermsPage'; 
import SettingsPage from './SettingsPage'; 
import WelcomeScreen from './WelcomeScreen'; 

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation, route }) {
  const likedItems = route?.params?.likedItems || {}; // This ensures likedItems is passed to the drawer

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Username</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('My Orders')}
      >
        <Text style={styles.drawerItemText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Favorites', { likedItems })} // Passing likedItems here
      >
        <Text style={styles.drawerItemText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Terms and Conditions')}
      >
        <Text style={styles.drawerItemText}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('WelcomeScreen')}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Aumbram" component={HomePage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="My Orders" component={MyOrdersPage} />
      <Drawer.Screen 
        name="Favorites"
        component={FavoritesPage}  // FavoritesPage will receive likedItems as params
        options={({ route }) => ({
          likedItems: route?.params?.likedItems || {}  // Passing likedItems if available
        })}
      />
      <Drawer.Screen name="Terms and Conditions" component={TermsPage} />
      <Drawer.Screen name="Settings" component={SettingsPage} />
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: '#f2a850',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeDrawer;
