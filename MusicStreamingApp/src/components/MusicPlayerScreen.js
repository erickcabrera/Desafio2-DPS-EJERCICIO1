import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MusicPlayerScreen = ({ route, navigation }) => {
  const { album, song } = route.params;
  const playbackState = usePlaybackState();

  useEffect(() => {
    setupTrackPlayer();

    // Función de limpieza al desmontar el componente
    return cleanup;
  }, []);

  useEffect(() => {
    // Detener la reproducción cuando se sale de la pantalla
    return () => {
      pausePlayback();
    };
  }, []);

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../../assets/music/reference.mp3'), // Ruta relativa al audio
        title: song.title,
        artist: song.artist,
        artwork: album.color, // Usamos el color del álbum como arte de portada
      });
      TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
      });
      await TrackPlayer.play();
    } catch (error) {
      console.error('Error al configurar TrackPlayer:', error);
      Alert.alert('Error', 'Hubo un problema al cargar la canción. Inténtalo de nuevo más tarde.');
    }
  };

  const cleanup = () => {
    TrackPlayer.destroy();
  };

  const pausePlayback = async () => {
    try {
      await TrackPlayer.pause();
    } catch (error) {
      console.error('Error al pausar la reproducción:', error);
      Alert.alert('Error', 'Hubo un problema al pausar la reproducción. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={[styles.albumCover, { backgroundColor: album.color }]}>
          <Text style={styles.albumInfoText}>{album.title}</Text>
          <Text style={styles.albumInfoText}>{album.artist}</Text>
        </View>
        <Text style={styles.songTitle}>{song.title}</Text>
        <Text style={styles.songArtist}>{song.artist}</Text>
        <Text style={styles.playbackState}>{getPlaybackStateText(playbackState)}</Text>
      </View>
    </View>
  );
};

const getPlaybackStateText = (state) => {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'Ninguno';
    case TrackPlayer.STATE_PLAYING:
      return 'Reproduciendo';
    case TrackPlayer.STATE_PAUSED:
      return 'Pausado';
    case TrackPlayer.STATE_STOPPED:
      return 'Detenido';
    default:
      return 'Desconocido';
  }
};

const styles = StyleSheet.create({
  // ... Estilos aquí
});

export default MusicPlayerScreen;