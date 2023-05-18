import React, {useEffect, useState} from 'react';
import {BackHandler, Alert} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from './publicAuth';
import SplashScreen from '../screens/SplashScreen';

export const navigatorRef = createNavigationContainerRef();

const Navigator = () => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  // try {
  //   AsyncStorage.getItem('isUserFirstTime').then(item => {
  //     console.log('isFirstTime', item);
  //     setIsFirstTime(item);
  //   });
  // } catch (e) {}

  useEffect(() => {
    // dispatch(getUserDetailsAction(userdetails));
    setTimeout(() => {
      <SplashScreen />;
    }, 1000);
  }, []);

  const routeNameRef = React.useRef();

  useEffect(() => {
    const backAction = () => {
      if (routeNameRef.current == 'HomeScreen') {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer
      ref={navigatorRef}
      onReady={() => {
        routeNameRef.current = navigatorRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigatorRef.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}>
      <Auth />
    </NavigationContainer>
  );
};

export default Navigator;
