// AlbumScreen.js

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity  } from 'react-native';

const AlbumScreen = ({ route, navigation }) => {
    const { album } = route.params;

  const songs = [
    { id: '1', title: 'Canción 1', artist: 'Artista 1' },
    { id: '2', title: 'Canción 2', artist: 'Artista 2' },
    { id: '3', title: 'Canción 3', artist: 'Artista 3' },
    { id: '4', title: 'Canción 4', artist: 'Artista 4' },
    { id: '5', title: 'Canción 5', artist: 'Artista 5' },
    { id: '6', title: 'Canción 6', artist: 'Artista 6' },
    { id: '7', title: 'Canción 7', artist: 'Artista 7' },
    { id: '8', title: 'Canción 8', artist: 'Artista 8' },
    { id: '9', title: 'Canción 9', artist: 'Artista 9' },
    { id: '10', title: 'Canción 12', artist: 'Artista 10' },

  ];

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => navigation.navigate('MusicPlayerScreen', { album, song: item, action: 'play' })}
    >
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => handleIconClick('play', item)}>
          <Ionicons name="play" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('remove', item)}>
          <Ionicons name="remove-circle-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('heart', item)}>
          <Ionicons name="heart" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header con botón de retroceso */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}  // Utilizamos navigation.goBack()
          style={styles.backButtonContainer}
        >
          {/* Usamos el componente Ionicons para una flecha hacia atrás */}
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{album.title}</Text>
      </View>
      <View style={styles.albumContainer}>
        <View style={[styles.albumCover, { backgroundColor: album ? album.color : 'gray' }]}>
        </View>
      </View>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={renderSongItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,  // Ajusta el marginTop para que el header comience más abajo
    padding: 20,  // Ajusta el padding superior para que el header comience más abajo
  },
  backButtonContainer: {
    position: 'absolute',
    left: 10,  // Ajusta la posición según tus preferencias
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  
  songItem: {
    flexDirection: 'row', // Ajustado a 'row'
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  albumContainer: {
    paddingVertical: 20, // Espacio arriba y abajo
    //alignItems: 'center',
  },
  albumCover: {
    justifyContent: 'center',
    alignSelf: 'center', // Alinea la vista consigo misma (centra horizontalmente)
    backgroundColor: 'gray',  // Color de fondo predeterminado
    width: '50%', // Ancho del 50% de la pantalla
    aspectRatio: 1, // Mantener la relación de aspecto cuadrada
  },
  songInfo: {
    flex: 1,
  },
  songArtist: {
    fontSize: 16,
    color: '#888',
  },
  iconsContainer: {
    flexDirection: 'row', // Cambiado a 'row'
    alignItems: 'center',
    justifyContent: 'space-around', // Espaciado uniforme
    width: 120, // Ancho total de los iconos (ajusta según sea necesario)
  },
  // ... (otros estilos)
});

export default AlbumScreen;