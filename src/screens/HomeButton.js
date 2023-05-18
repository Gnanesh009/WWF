import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

const HomeButton = ({ navigation }) => {

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: 'flex-end', alignContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={{ height: 20, width: 20 }}
                    source={require('../assets/home_button.png')}
                    />
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeButton;