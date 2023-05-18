import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const WWF = ({navigation}) => {
  return (
    
    <ImageBackground
        style={{height: screenHeight, width:screenWidth,flex:1}}
      source={require('../assets/background_image.png')}>
       
     
      <SafeAreaView style={{flex:1 }}>
        <View style={{ flex: 1 }}>
          <StatusBar
        animated={true}
          backgroundColor="black"/>
        <View style={{height:'20%',flexDirection:'row',marginLeft:0,marginRight:0,backgroundColor:'#E0DA10',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../assets/backarrow.png')} style={{width:30,height:30,marginLeft:10}}  />
        </TouchableOpacity>
        <View style={{flex:1,fontWeight:'700',justifyContent:'center',paddingLeft:10}}>
        <Text style={{color:"black",fontSize:18,fontWeight:'500',justifyContent:'center',fontFamily:'Outfit-Medium'}}>World Wildlife fund for nature</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontWeight:'bold',fontFamily:'Outfit-Medium'}}>Mission : </Text>
        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,fontFamily:'Outfit-Light' }}>We bear witness to the accelerating decline of nature and our climate, with serious consequences for life on Earth, including our own.
Our vision is to build a future in which people live in harmony with nature. To deliver this mission, we work to conserve and restore biodiversity, the web that supports all life on Earth; to reduce humanity’s environmental footprint; and to ensure the sustainable use of natural resources to support current and future generations.
We celebrate and respect diversity in nature and among the people, partners, and communities with whom we work. Across the many cultures and individuals that represent WWF, we are unified by one mission, one brand, and one common set of values:
Courage: We demonstrate courage through our actions, we work for change where it’s needed, and we inspire people and institutions to tackle the greatest threats to nature and the future of the planet, which is our home.
Integrity: We live the principles we call on others to meet. We act with integrity, accountability and transparency, and we rely on facts and science to guide us and to ensure we learn and evolve.
Respect: We honor the voices and knowledge of the people and communities that we serve, and we work to secure their rights to a sustainable future.
          Collaboration: We deliver impact at the scale of the challenges we face through the power of collective action and innovation.</Text>
        <Text style={{ fontSize: 14,textAlign:'justify',marginLeft:18,fontWeight:'bold', fontFamily:'Outfit-Medium' }}>Map : </Text>
        <Image style ={{height:screenHeight/5, width:screenWidth/1.1,margin:18}}
          source={require
          ('../../src/assets/Map.png')}></Image>
        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>All natural resources are non-renewable and most of them are at the risk of depletion in the next few decades. The distribution of natural resources on the earth is uneven and naturally, consumption patterns too are disproportionate. In a globalized economy, where consumerism is increasing rapidly, ‘conspicuous consumption’ is putting an undue burden on the environment with per capita carbon footprint increasing with sudden changing lifestyles and consumption patterns.</Text>
        
        </ScrollView>
        </View>
        <View style={{ flexDirection:'row-reverse',marginHorizontal:20}}>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={{ height: 60, width: 60,margin:10,marginRight:-5 }}
                    source={require('../assets/home_button.png')}
                    />
                    </Pressable>
            </View>
        
        </SafeAreaView>
      </ImageBackground>
    );
};
export default WWF;