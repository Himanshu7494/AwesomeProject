import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Video from 'react-native-video';

const App = () => {

  return (

    <View style={styles.container}>

      { /*Video */}

      { <Video onLoad={(data)=>console.log(data)} source={{ uri: './assets/video.mp4' }} controls={true} /> }

      { /*Play Button*/ }

      <TouchableOpacity style={styles.playButton}>

        <Text style={styles.playButtonText}>Play</Text>

      </TouchableOpacity>

      {/* Video Details */}

      <View style={styles.videoDetails}>

        <Text style={styles.videoTitle}></Text>

        <Text style={styles.videoDescription}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        <Text style={styles.uploadedByText}></Text>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

    justifyContent: 'center',

    alignItems: 'center',

  },

  video: {

    width: '100%',

    height: '60%',

  },

  playButton: {

    position: 'absolute',

    backgroundColor: '#3498db',

    padding: 15,

    borderRadius: 50,

    zIndex: 1,

  },

  playButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  videoDetails: {

    width: '100%',

    padding: 20,

    backgroundColor: '#333',

  },

  videoTitle: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

  videoDescription: {

    color: '#fff',

    width: 360,

    height: 357,

    top: 443,


  },

  uploadedByText: {

    color: '#fff',

  },

});



export default App;