import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import HomeScreen from './HomeScreen';

const SplashScreen = ({navigation}) => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  setTimeout(() => {
    navigation.navigate('HomeScreen');
  }, 3000);

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'#000'}
      />
      <Image
        source={require('../assets/wwf_splash_screen.png')}
        style={{width: screenWidth, height: screenHeight}}
      />
    </View>
  );
};

export default SplashScreen;
