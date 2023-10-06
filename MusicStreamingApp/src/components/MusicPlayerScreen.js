import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MusicPlayerScreen = ({ route, navigation }) => {
  const { album, song } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.headerTitle}>{album.title}</Text>

        </TouchableOpacity>
      </View>
      <View style={styles.albumContainer}>
        <View style={[styles.albumCover, { backgroundColor: album.color }]} />
      </View>

      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.songArtist}>{song.artist}</Text>
      </View>

      <View style={styles.playbackControls}>
        <TouchableOpacity onPress={() => { /* Lógica para el botón de repetición */ }}>
          <Ionicons name="repeat" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Lógica para el botón de retroceso */ }}>
          <Ionicons name="play-skip-back" size={36} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Lógica para el botón de reproducción/pausa */ }}>
          <Ionicons name="play-circle" size={60} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Lógica para el botón de avance rápido */ }}>
          <Ionicons name="play-skip-forward" size={36} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Lógica para el botón de aleatoriedad */ }}>
          <Ionicons name="shuffle" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBar}>
        <View style={styles.progressIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    paddingTop: 40, // Ajuste del paddingTop para respetar la pantalla
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  albumContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  albumCover: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  songInfoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  playbackControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  progressBar: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  progressIndicator: {
    height: '100%',
    width: '15%',
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
});

export default MusicPlayerScreen;