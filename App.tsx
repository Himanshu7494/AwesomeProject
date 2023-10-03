import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        paused={!isPlaying}
      />
      <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
        <Text style={styles.playPauseButtonText}>{isPlaying ? '▶️' : '⏸️'}</Text>
      </TouchableOpacity>

      {/* Video Details */}

      <View style={styles.videoDetails}>
        <Text style={styles.videoDescription}>Description:Lorem ipsum dolor sit amet, consectetur adipiscing collaborative online encyclopedias</Text>
      </View>

      {/* Cut Button */}
      <TouchableOpacity
      style={styles.cutButton}
      > 
      <Text style={styles.cutButtonText}>❌</Text></TouchableOpacity>



    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  playPauseButton: {
    position: 'absolute',
    bottom: 300,
    right: 125,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 50,
    padding: 10,
  },
  playPauseButtonText: {
    fontSize: 40,
    color: 'white',
  },
  videoDescription: {

    color: '#fff',

    fontSize: 20,

    width: 320,

    height: 350,

    top: 390,
    
  
  },

cutButton: {
  position: 'absolute',
  top: 20,
  right: 20,
  backgroundColor: 'skyblue',
  padding: 10,
  borderRadius: 5,
},

cutButtonText: {
  color: 'white',
  fontWeight: 'bold',
},

});

export default App;