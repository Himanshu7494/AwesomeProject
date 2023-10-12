// home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToVideo = () => {
    // Navigate to the Video screen when the button is pressed
    navigation.navigate('VideoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Button title="Go to Video Screen" onPress={navigateToVideo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;