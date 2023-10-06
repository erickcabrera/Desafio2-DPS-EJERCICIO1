// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import AlbumScreen from './src/components/AlbumScreen';
import MusicPlayerScreen from './src/components/MusicPlayerScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,  // Oculta el header en todas las pantallas
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AlbumScreen" component={AlbumScreen} />
        <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;