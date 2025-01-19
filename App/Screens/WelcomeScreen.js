import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

function WelcomeScreen({ navigation }) {
    const handleSignInPress = () => navigation.navigate('SignIn');

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require("../assets/logo.png")}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <ExpoStatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
    },
    button: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#f2a850',
        padding: 15,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
