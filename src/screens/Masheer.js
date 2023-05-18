import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Mahseer = ({ navigation }) => {
  const [isInfoCardVisible, setIsInfoCardVisible] = useState(false);
  const [infoCardText, setInfoCardText] = useState('');

  const handleBodyPartPress = (bodyPart) => {
    setIsInfoCardVisible(true);
    if (bodyPart === "Eye")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart}s are very small and without lens. They can only differentiate between light and dark
.`);
    }
    else if (bodyPart === "Blowhole")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart} at the top of the head, acts as a nos- tril helping in breathing`);
    }
    else if (bodyPart === "Blubber")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart} is a thick layer of fat deposited under the skin. It keeps the body warm`);
    }
    else if (bodyPart === "Flukes")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart} are large and flat. They act as thermo-regulators and also help in propulsion
`);
    }
    else if (bodyPart === "Flippers")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart} are large which help in swimming and finding surroundings
`);
    }
       else if (bodyPart === "Rostrum")
    {
       console.log(`${bodyPart}`)
         setInfoCardText(`${bodyPart}is long and slim adapted to catching small fish`);
      }
   
  };

  const handleEyePress = () => {
    setIsInfoCardVisible(true);
    setInfoCardText('This is the animal\'s eye.');
  };

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
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('AquaticBiodiversity')}>
        <Image source={require('../assets/backarrow.png')} style={{width:30,height:30,marginLeft:10}}  />
        </TouchableOpacity>
        <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Mahseer</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>GOLDEN MAHSEER : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>The name mahseer is not without relevance; roughly translated it means (mahi – fish and sher – tiger) and hence it is also referred to as tiger amongst the fish of the Himalayan Rivers. The mahseer is a recognized name for three genus found in India, namely, Tor, Naziritor and Neolissochilus.</Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,fontFamily:'Outfit-Light' }}>It is a large cyprinid and known to be the toughest among the freshwater sport fish. However, the species have suffered a drastic population decline in much of its distribution range, and are now considered threatened due to pollution, habitat loss and overfishing. There is a dearth of information on
the habitat, feeding, breeding ecology and migratory behavior of the species.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Occurrence of Golden mahseer is reported across Afghanistan, Pakistan, India, Nepal, Bangladesh, Bhutan, Myanmar, Iran and Thailand.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>In India, it is found in the foothills of the Himalayas and in various stretches of the Ganga and Brahmaputra river systems. It is also
cultured and introduced in central India (Tata Power) at Lonavala, Pune, Maharashtra.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Of the 47 species of Mahseer that exist in the world, India is home to fifteen species.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 18 }}>IUCN RED LIST STATUS :</Text>
           <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                ('../../src/assets/dolphin_flow.png')} resizeMode='contain'></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium' }}>THREATS :</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>The Golden Maheer population across its distribution range is exposed to a variety of anthropogenic threats. Among these threats, overfishing and destructive fishing practices (dynamiting, electro-fishing, fish poisoning) are key threats. This leads to the depletion of the brood stock, as well as impacts the growth of young mahseer fish.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Other threats include, presence of linear infrastructures like dams and barrages that not only fragment the habitat, but the connectivity of the river, thereby affecting their feeding and migratory pathways. Diversion of water for meeting people’s demand has also adversely affected hill streams that forms a crucial spawning grounds.</Text>
            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/MahseerFree.jpg')}></Image>
          <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>MORPHOLOGICAL FEATURES : </Text>
            
          <View style={{ position: 'absolute',marginTop:15,left:15,height:screenHeight/3, width:screenWidth/1.1}} >
                <TouchableOpacity onPress={() => handleBodyPartPress('Rostrum')} style={{
                  alignItems: 'flex-start',
                    paddingLeft: 45, marginTop: 15
                }}>
                      <View style={{ width: 10, height: 10, backgroundColor: '#4d979a', borderRadius: 10, borderColor:'white',borderWidth:1, }} />
                </TouchableOpacity>
                

                <View style={{ flex: 0, flexDirection: 'row', marginTop: 45 }}>
                  
                  <TouchableOpacity onPress={() => handleBodyPartPress('Blowhole')} style={{
                    flex:0.4,
                  alignItems: 'flex-end'
                  ,
                        }}>
                    <View style={{
                      width: 10, height: 10, backgroundColor: '#4d979a',
                      borderRadius: 10, borderColor: 'white', borderWidth: 1,marginRight:20
                    }} />
                   
                  </TouchableOpacity>

                <TouchableOpacity onPress={() => handleBodyPartPress('Eye')} style={{ flex:0.5,}}>
                    <View style={{
                      width: 10, height: 10, backgroundColor: '#4d979a', borderRadius: 10,
                      borderColor: 'white', borderWidth: 1,
                    }} />
                </TouchableOpacity>
                </View>
              
                <TouchableOpacity onPress={() => handleBodyPartPress('Blubber')} style={{
                   alignItems: 'center',
                marginTop:80}}>
                  <View style={{
                    width: 10, height: 10, backgroundColor: '#4d979a',
                    borderRadius: 10, borderColor: 'white', borderWidth: 1
                  }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleBodyPartPress('Flippers')} style={{alignItems:'flex-end',marginTop:15,alignItems:'center'}}>
            <View style={{ width: 10, height: 10, backgroundColor: '#4d979a', borderRadius: 10,borderColor:'white',borderWidth:1, }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleBodyPartPress('Flukes')} style={{alignItems:'flex-end',marginRight:25}}>
            <View style={{ width: 10, height: 10, backgroundColor:'#4d979a', borderRadius: 10,borderColor:'white',borderWidth:1, }} />
          </TouchableOpacity>

           {isInfoCardVisible && (
        <View style={{  padding: 20 ,position:'absolute',marginTop:205}}>
          <Text style={{color:'white',fontFamily:'Outfit-Light',marginTop:0,fontSize:12}}>{infoCardText}</Text>
        </View>
      )}
              </View>
              </View>
            

        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The body colour of an adult mahseer is golden on the dorsal side and the fins are reddish-yellow. The fish is characterized by its large scales and thick powerful lips with relatively longer barbels (sensory hair-like organs in the front of the mouth).</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Golden mahseer preferccc torrential/ fast free flowing hillstreams dominated with rocks, and gravel dominated substrate. The species seems to perform triple phase altitudinal migrations from
2000-3000m asl.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Golden mahseer can reach up to
2.75 m (9.0 ft) in length and 54 kg (119 lb) in weight. However, nowadays larger individuals are a rare occurrence.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The fish generally breed during floods and spawn over rocky, gravel substrates, often in ephemeral headwaters. The reproductive capacity of golden mahseer is generally low (6000-10,000 eggs per kg) as compared to other fishes such as Labeo bata (45,910-3,99,050 eggs per kg) or Mystus bleekeri with an average 15, 962 eggs per kg. Eggs hatch in 3-4 days in water at a temperature of 20- 28o C.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The mahseer is an omnivorous fish. The diet mainly comprises of green filamentous algae, small crustaceans, fish, larvae of benthic insects, and plant matter. During migration phase, fish of all ages seems to remain carni-omnivorous while fishes more than 46 cm in size feed on smaller fishes.</Text>
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
export default Mahseer;