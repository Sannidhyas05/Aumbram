import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo in the top left corner */}
      <TouchableOpacity onPress={() => alert('Logo clicked')}>
        <Image
          source={require('../assets/aumbram-golden.png')} // Replace with your logo image path
          style={styles.logo}
        />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Welcome to Aumbram</Text>
        <Text style={styles.subtitle}>Explore our amazing products</Text>

        {/* Button to open the left-side menu */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.openDrawer()} // Opens the left swipe menu
        >
          <Text style={styles.buttonText}>Open Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginLeft: -10, 
    paddingTop: 60, 
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2a850',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f2a850',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
