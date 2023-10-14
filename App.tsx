import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from './VideoScreen.js';
import Home from './Home.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
