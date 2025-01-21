import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import SignIn from './App/Screens/SignIn';
import VerifyOTP from './App/Screens/VerifyOTP';
import HomeDrawer from './App/Screens/HomeDrawer';
import FavouritesPage from './App/Screens/FavoritesPage';
import ProfilePage from './App/Screens/ProfilePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen
          name="HomePage"
          component={HomeDrawer}
          options={({ navigation }) => ({
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  source={require('./App/assets/aumbram-golden.png')}
                  style={{ width: 100, height: 40, marginLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Favourites"
          component={FavouritesPage}
          options={{
            headerShown: true,
            headerTitle: 'Favourites',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerShown: true,
            headerTitle: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
