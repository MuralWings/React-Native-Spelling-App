//imnports basic stuff
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';



/// handles the change in pages when someone clicks the buttons 
const HomeScreen = ({ navigation }) => {
  const handlePlayPress = () => {
    navigation.navigate('Play');
  };
  const handlePlayPress2 = () => {
    navigation.navigate('Settings');
  };
///makes buttons and picks where they  they go and how they look
  return (
    <View style={styles.container}>
    <Image source={require('/assets/bee.png')}
      style={{width: 150, height: 175}} />
      <TouchableOpacity style={styles.playButton} onPress={handlePlayPress}>
      <Image source={require('/assets/Buttons/PlayB.png')}
      style={{width: 296, height: 104 }}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton} onPress={handlePlayPress2}>
      <Image source={require('/assets/Buttons/Settings.png')}
      style={{width: 296, height: 104 }}
      />
      </TouchableOpacity>
       <Text> Verison 1.1</Text>
       
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    fontSize: 24,
    marginBottom: 20,
  },
  playButton: {
    marginBottom:20,
     alignItems: 'center',
  },
  playButtonText: {
    color: '#0000000', 
    fontSize: 18,
  },
  playButton2: {
    
  },
});

export default HomeScreen;