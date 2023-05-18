import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Otters = ({ navigation }) => {
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
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Otters</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>SMOOTH-COATED OTTER : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Otters are known to be on earth for the last 20 million years. They are semi-aquatic, fish eating mammals that belong to the Mustelidae family. India is home to three species of Otters- Common Otter Lutra
lutra, Smooth-coated Otter Lutrogale perspicillata, and Small-clawed Otter Aonyx cinereus.</Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,fontFamily:'Outfit-Light' }}>The Smooth-coated otter is distributed throughout the country from the Himalayas southward, adapting to a variety of freshwater habitats. Its status is feebly documented and natural populations have been extirpated through the exploitation of the animal and its habitat.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>IUCN RED LIST STATUS :</Text>
           <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                ('../../src/assets/dolphin_flow.png')} resizeMode='contain'></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium' }}>THREATS :</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Habitat destruction due to water developmental projects; sand mining; reclamation of wetlands for human settlements, agriculture, and industrial use; pollution in water bodies especially due to pesticides and poaching are the major threats for the Smooth Coated Otter across its distribution range. Otters often come in direct conflict with the fisher-folks, who in some cases view them as a competitor for fisheries resources, often resulting in Otter-fishermen conflict.</Text>

            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/OttersFree.jpg')}></Image>
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
            

        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>It has a very smooth, sleek pelage (coat). The parts from the upper lip to the edge of the nose, cheeks, sides of the neck and throat are whitish or grey. Muzzle (nose pad) is not spotted and the nose is bare, dusky with peaked upper margin (inverted V-shaped). The whiskers are white and well developed. Eyes and ears are small. The tail is flattened and tapering at the end, while the limbs are short, strong with large and well-webbed paws.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Otters are known to use a wide variety of habitats: large rivers, lakes and marshy areas. Their presence shows a relationship with sufficient prey base, freshwater, sandbanks and bank-side vegetation in which to rest and groom, along with suitable tree roots and rock crevices to build holts (dens).
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>An adult Smooth-coated Otter is a medium sized mammal with a total body length measuring 1.5m and weighs about 7-11 kg.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Sexual maturity is attained at an age of 2-3 years. Males are polygamous; mating with up to four females. The gestation period is about two months and the female gives birth to
2-5 young ones at a time each year. Otters give birth on land
in secure, undisturbed and carefully prepared holts (dens). Female otters aggressively defend their newborns and prefer to stay in dens near river banks where there is an abundant food supply. The male often stays near the den assisting in the care of the young ones.
</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Smooth-coated Otters are strong swimmers and hunt in groups, preferring shallow and calm waters. They are primarily fish eaters. The diet is often supplemented with crabs, insects and other vertebrates such as frogs, rodents, and small birds. This is a strategy for meeting additional energy requirements for thermoregulation and for rearing young ones.</Text>
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
export default Otters;