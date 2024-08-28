// nmports depdencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SpellingScreen from './SpellingScreen';
import SettingsScreen from './SettingsScreen';
import { Audio } from 'expo-av';

const Stack = createStackNavigator();
// main function
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Play"
          component={SpellingScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// loads functions
export default App;
