import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const SuccessStories = ({ navigation }) => {
  
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
        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Success Stories</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>WHAT WAS THE ISSUE?</Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,fontFamily:'Outfit-Light' }}>Just 10 years ago, wild tigers were heading towards extinction. At the start of the 21st century there were an estimated 100,000 tigers in the wild. But in 2010 global tiger numbers in the wild hit an all-time low of as few as 3,200 individuals and their historical range had been reduced to just 5%. The world’s largest cat was becoming one of the rarest. Across their range, tigers face unrelenting pressures from poaching, conflict with people and habitat destruction and fragmentation. 
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>WHAT DID WE DO? </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Thankfully, though, things have started to turn around.</Text>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/tigerfree.jpg')}></Image>
  
            
        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>In 2010, the governments of all 13 tiger range countries came together at the world’s first ever global tiger summit and agreed a “TX2” commitment to double the number of wild tigers by 2022, the next Chinese Year of the Tiger. A global recovery plan followed and WWF – together with individuals, businesses, communities, governments, and other conservation partners – have worked tirelessly to turn this bold and ambitious conservation goal into reality. “The target catalysed much greater conservation action, which was desperately needed,” says Becci May, senior programme advisor for tigers at WWF-UK.</Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Tigers have since made an astonishing comeback in several countries including India, Nepal, Bhutan, and Russia. Nepal has almost doubled their wild tiger numbers since 2009, and, in some parts of India TX2 has been achieved. Nestled in northern India, in the Terai Arc Landscape, Pilibhit Tiger Reserve is one of the narrowest tiger reserves in India, while the surrounding areas support among the highest human population densities of all tiger conservation landscapes globally. And yet, the reserve managed to double its tiger population within a decade, to an estimated 65 individuals.
            </Text>
            
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, marginTop: 1, fontFamily: 'Outfit-Light' }}>Meanwhile, in Nepal, a 2018 national tiger population survey estimated tiger numbers had increased from an estimated 121 individuals in 2009 to 235. And in Bardia National Park alone, the tiger population increased almost five-times from 18 estimated in 2008 to 87 ten years later.</Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>There have been similar stories of success in the transboundary area of Manas Tiger Reserve in India and Royal Manas National Park in Bhutan, which more than doubled its tiger population. Together with Pilibhit Tiger reserve, these three protected areas received the new TX2 Award for their excellence in tiger conservation, which was supported by WWF. </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>ELEPHANTS UNDER THREAT </Text>
            <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/elephantfree.jpg')}></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, marginTop: 1, fontFamily: 'Outfit-Light' }}>One of the key threats to the majestic African elephant is poaching. Fuelled by the ivory trade, around 15,000 animals are killed each year for their tusks - that's an average of 40 a day. In fact, we estimate that we’ve lost over 80% of the planet’s African elephants in the past century. </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>MEASURING SUCCESS </Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>These bans sound like good progress, but do they really make a difference to elephants? We’ve been monitoring ivory demand in China since the ban and launched a report in 2020 with results of the latest survey. We found that demand for ivory is continuing to decrease since the ban. Consumer’s intentions to purchase ivory are now less than half of pre-ban levels. This is a fantastic step forward, but the report also highlighted that there is more work to be done to reduce demand amongst overseas travellers. We hope that other countries will be encouraged to follow China’s example, and with your support, we’re continuing to fight for elephants and end the slaughter of these magnificent creatures. </Text>
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
export default SuccessStories;