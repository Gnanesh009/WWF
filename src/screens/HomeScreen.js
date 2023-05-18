import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Button,
  DrawerLayoutAndroid,
  BackHandler,
} from 'react-native';

// import { Icon } from 'react-native-vector-icons/icon';
const HomeScreen = ({navigation}) => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{flex: 2, backgroundColor: '#4D979A'}}>
        <TouchableOpacity
          style={{
            height: '10%',
            paddingLeft: 10,
            justifyContent: 'center',
            borderBottomColor: '#E0DA10',
            borderBottomWidth: 1,
          }}
          onPress={() => navigation.navigate('Games')}>
          <Text
            style={{
              justifyContent: 'center',
              paddingLeft: 10,
              fontFamily: 'Outfit-Medium',
              color: '#fff',
            }}>
            Games and Activities
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '10%',
            paddingLeft: 10,
            justifyContent: 'center',
            borderBottomColor: '#E0DA10',
            borderBottomWidth: 1,
          }}
          onPress={() => navigation.navigate('SuccessStories')}>
          <Text
            style={{
              justifyContent: 'center',
              paddingLeft: 10,
              fontFamily: 'Outfit-Medium',
              color: '#fff',
            }}>
            Success Stories
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}>
      <SafeAreaView style={{flex: 1, marginTop: 0, marginLeft: 0}}>
        <View style={{position: 'absolute', marginTop: 0, bottom: 0}}>
          <Image
            style={{height: screenHeight, width: screenWidth}}
            source={require('../assets/background_image.png')}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{}}
            onPress={() => drawer.current.openDrawer()}>
            <Image
              source={require('../assets/menu_icon.png')}
              style={{width: 25, height: 25, marginTop: 45, marginLeft: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.9}}>
          <View
            style={{
              flexDirection: 'row',
              height: '20%',
              width: '100%',
              backgroundColor: '#4D979A',
              marginLeft: 35,
              marginTop: 100,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 90,
                  width: 90,
                  marginLeft: 0,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                }}
                source={require('../assets/wwf.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  paddingLeft: 22,
                  flex: 0.8,
                  fontFamily: 'Outfit-Medium',
                }}>
                World wildlife fund for nature
              </Text>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  paddingVertical: 8,
                  borderRadius: 55,
                  backgroundColor: '#e0da10',
                  marginRight: 70,
                  marginTop: 30,
                  paddingHorizontal: 4,
                }}
                onPress={() => navigation.navigate('WWF')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontFamily: 'Outfit-Light',
                    textAlign: 'center',
                  }}>
                  Intro
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '20%',
              width: '100%',
              backgroundColor: '#4D979A',
              marginLeft: 35,
              marginTop: 25,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 90,
                  width: 90,
                  marginLeft: 0,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                }}
                source={require('../assets/rwwf.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  paddingLeft: 22,

                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 0.8,
                  fontFamily: 'Outfit-Medium',
                }}>
                Real world wildlife products
              </Text>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  paddingVertical: 8,
                  borderRadius: 55,
                  backgroundColor: '#e0da10',
                  marginRight: 70,
                  marginTop: 30,
                  paddingHorizontal: 4,
                }}
                onPress={() => navigation.navigate('Wildlife')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontFamily: 'Outfit-Light',
                    textAlign: 'center',
                  }}>
                  Intro
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '20%',
              width: '100%',
              backgroundColor: '#4D979A',
              marginLeft: 35,
              marginTop: 25,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', flex: 1, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 90,
                  width: 90,
                  borderTopRightRadius: 18,
                  borderBottomRightRadius: 18,
                }}
                source={require('../assets/ramaganga_river_basin.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  paddingLeft: 20,

                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 0.8,
                  fontFamily: 'Outfit-Medium',
                }}>
                Ramaganga River Basin
              </Text>
              <TouchableOpacity
                style={{
                  flex: 0.3,
                  paddingVertical: 8,
                  borderRadius: 55,
                  backgroundColor: '#e0da10',
                  marginRight: 70,
                  marginTop: 30,
                  paddingHorizontal: 4,
                }}
                onPress={() => navigation.navigate('Ramganga')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                    fontFamily: 'Outfit-Light',
                    textAlign: 'center',
                  }}>
                  Module
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>

        {/* User Input fields */}
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navigationContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
