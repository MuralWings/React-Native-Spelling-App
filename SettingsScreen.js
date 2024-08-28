import React, { useState , useEffect} from 'react';
import { View, StyleSheet,Text,Switch ,TouchableOpacity} from 'react-native';
import { Slider} from '@rneui/themed';
import { Audio } from 'expo-av';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
const [value, setValue] = useState(50);
const [volume,setVolume]= useState(0.5);
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

 useEffect (() => {
   Audio.setAudioModeAsync({
     allowsRecordingIOS: false,
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
     playsInSilentModeIOS: true,
     shouldDuckAndroid: true,
     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
     volume: volume,
   });

 }, [volume]);


const handleVolumeChange = (newValue) =>
{
  setVolume(value/100);
  setValue(newValue);
}

return (
  <>
    <Text style={styles.subHeader}>Volume</Text>

    <View style={[styles.contentView]}>
      <Slider
        value={value}
        onValueChange={handleVolumeChange}
        maximumValue={100}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 20, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 1, backgroundColor: 'transparent' }}
        
      />
      <Text style={{ paddingTop: 20 }}>Volume: {value}</Text>
    </View>
    <Text style={styles.subHeader}>Vibrations have beeen removed they broke the app</Text>
<Text style={styles.subHeader}>will be back soon</Text>
    
      
      
  </>
);
};

const styles = StyleSheet.create({
contentView: {
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'stretch',
},

subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
},
editText: {
    fontSize: 12,
     alignItems: 'center'
  },
 
});

export default Sliders;