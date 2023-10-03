import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Video from 'react-native-video';

 

const App = () => {

  const [isPlaying, setIsPlaying] = useState(false);

 

  const togglePlayPause = () => {

    setIsPlaying(!isPlaying);

  };

 

  return (

    <View style={styles.container}>

      {/* Background Video */}

      <Video

source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}

style={styles.video}

        resizeMode="cover"

        repeat={false}

        paused={!isPlaying}

        onTouchStart={togglePlayPause}

      />

 

      {/* Play/Pause Button */}

      {isPlaying ? null : (

        <TouchableOpacity style={styles.playButton} onPress={togglePlayPause}>

          <Text style={styles.playButtonText}>▶️</Text>

        </TouchableOpacity>

      )}

      {/* Video Details */}

      <View style={styles.container}>
      <Text style={styles.videoDescription}>Urek the Road Not Taken:</Text>
      <Text style={styles.videoDescriptions}>5 Himalayan Treks to</Text>
      <Text style={styles.videoDescription}>Unleash the Adventure in</Text>
      <Text style={styles.videoDescriptionss}>You This Summer</Text>
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

  playButton: {

    position: 'absolute',

    alignSelf: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    padding: 20,

    borderRadius: 50,

  },

  playButtonText: {

    color: 'white',

    fontSize: 24,

  },
  videoDescription: {

    color: '#FFFFFF',
   
    fontWeight: 'bold',
    
    top: 250,
    fontSize:28,
    
  },
  videoDescriptions: {

    color: '#FFFFFF',
   
    fontWeight: 'bold',
    paddingRight:53,
    top: 250,
    fontSize:28,
  },
  videoDescriptionss: {

    color: '#FFFFFF',
   
    fontWeight: 'bold',
    paddingRight:87,
    top: 250,
    fontSize:28,
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