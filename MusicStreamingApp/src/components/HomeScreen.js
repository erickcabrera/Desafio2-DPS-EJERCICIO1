// HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const genres = [
  'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Electronica', 'Country', 'R&B', 'Reggae', 'Metal', 'Classical'
];

const generateAlbums = (genre) => {
  const albums = [];
  for (let i = 1; i <= 10; i++) {
    albums.push({
      title: `Album ${i}`,
      artist: `Artist ${i}`,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    });
  }
  return albums;
};

const albumsData = genres.reduce((acc, genre) => {
  acc[genre] = generateAlbums(genre);
  return acc;
}, {});

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleAlbumSelection = (album) => {
    navigation.navigate('AlbumScreen', { album });
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Music UDB</Text>
      </View>
      {genres.map((genre, index) => (
        <View key={index} style={styles.genreContainer}>
          <Text style={styles.genreTitle}>{genre}</Text>
          <ScrollView horizontal>
            {albumsData[genre].map((album, albumIndex) => (
              <TouchableOpacity
                key={albumIndex}
                style={styles.albumContainer}
                onPress={() => handleAlbumSelection(album)}
              >
                <View style={[styles.albumCover, { backgroundColor: album.color }]} />
                <Text style={styles.albumTitle}>{album.title}</Text>
                <Text style={styles.albumArtist}>{album.artist}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginTop: 30,  // Ajusta el marginTop para que el header comience más abajo

    padding: 20,  // Ajusta el padding superior para que el header comience más abajo
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  genreContainer: {
    paddingHorizontal: 10,  // Agregado un padding horizontal para separar del borde
    marginBottom: 20,
  },
  genreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  albumContainer: {
    marginRight: 10,
    width: 175, 
    alignItems: 'center'
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',  // Centrar el texto
    marginTop: 5,  // Espacio entre la portada y el título
  },
  albumArtist: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',  // Centrar el texto
    marginTop: 3,  // Espacio entre el título y el nombre del artista
  },
  albumCover: {
    width: '100%',  // Ancho al 100% del contenedor
    height: 120,  // Altura ajustada para que quepa la portada y el texto debajo
    marginTop: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;