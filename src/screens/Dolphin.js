import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Dolphin = ({ navigation }) => {
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
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Dolphin</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>GANGES RIVER DOLPHIN : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Ganges River Dolphin, ‘Susu’ is one of the two subspecies of the South Asian River Dolpin, the other being the Indus Dolphin ‘Bhulan’ found in the Indus River in Pakistan and Beas River in India. The four other obligate freshwater dolphins found in the world are the Amazon River Dolphin ‘Boto’; Bolivian River dolphin, the Araguaian River Dolphin and Yangtze Dolphin ‘Baiji’ in the Yangtze River in China which is reported to be extinct since 2006.</Text>
            <Text style={{ fontSize: 14,textAlign:'justify',margin:18,fontFamily:'Outfit-Light' }}>The Ganges River Dolphin is flagged as the ‘Tiger of the Ganges’ being considered the mascot of a healthy aquatic environment and acts as an indicator species, which has the same role in a river ecosystem as a tiger does in a forest. It is one of the most charismatic mega-fauna of the Indian subcontinent, found in the Ganges-Brahmaputra-Meghna and Karnaphuli-Sangu river systems of India, Nepal, and Bangladesh. The recent population estimates in its entire distribution range recorded around 3500 individuals, of which more than 80% is within Indian Territory. Being adopted as the National Aquatic Animal
in India in 2009, consequently every year October 5th is consequently celebrated as Ganges River Dolphin Conservation Day.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>The species has also been granted ‘non-human personhood’ status by the Government of India, making India the first nation in the
world to recognize their unique intelligence and self-awareness.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>The species has been included in Schedule I of the Indian Wildlife Protection Act, 1972, in Appendix I of the Convention on International Trade in Endangered Species (CITES), in Appendix II of the Convention on Migratory Species (CMS), and is categorized as ‘Endangered’ on the International Union for the Conservation of Nature’s (IUCN) Red List.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>IUCN RED LIST STATUS :</Text>
           <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                ('../../src/assets/dolphin_flow.png')} resizeMode='contain'></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium' }}>THREATS :</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>The Ganges River Dolphin is threatened due to habitat degradation as a result of water development projects (such as dams, barrages and dredging operations), sand mining, over-fishing and pollution. The incidental catch of dolphins in the fishing gears, specifically gillnets are key causes of dolphin mortality in the River Ganga. Despite their numbers plummeting in the last few years, dolphins are still hunted in some areas for their oil, which is used for fishing.</Text>

            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/dolphin_original.png')}></Image>
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
            

        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The Ganges River Dolphin has a sturdy, yet flexible, body with large flippers and a low triangular dorsal fin. Calves are chocolate brown at birth and become grayish brown in adulthood with smooth and hairless skin. Females are larger than males and have long up-curved rostrum. The maximum size of a female is 2.67 m and the size of a male 2.12 m. Newly born calves are pink in colour, measure 70-90 cm and weigh around 7.5 kg. The Ganges Dolphin has a pair of small, non-functional eyes that lack lenses; hence individuals are dependent on echolocation to navigate, detect prey, and to communicate. They have a layer of blubber which helps with buoyancy, protection from predators, and insulation from harsh climates. Olfactory lobes are absent, suggesting that they have no sense of smell.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The species is found exclusively in flowing, riverine freshwater habitat. It occurs in clean, slow-flowing rivers and prefers deep pools, eddy counter- currents located downstream of the convergence of rivers and at sharp
meanders, upstream and downstream of mid-channel islands.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Ganges River Dolphins often occur in small clusters of 1-3 individuals; however sometimes lone individuals may also be found. An individual may weigh up to 150 kg. Polygamous mammals, they surface every 30- 120 seconds for breathing. While
              no conclusive studies have been done, the maximum longevity is considered to be 30 years.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Females attain sexual maturity at an age of 10-12 years, while the males mature earlier. Females usually give birth from October to March, with a peak in December and January at the onset of the dry season. The gestation period is 9-11 months and a female gives birth to only one calf, once in 2-3 years. The young wean away from the mother within their first year.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Females attain sexual maturity at an age of 10-12 years, while the males mature earlier. Females usually give birth from October to March, with a peak in December and January at the onset of the dry season. The gestation period is 9-11 months and a female gives birth to only one calf, once in 2-3 years. The young wean away from the mother within their first yearDolphins emit an ultrasonic sound and use echolocation to detect their prey. They have conical teeth to catch their prey that is subsequently swallowed. Diet includes small fish and invertebrates.</Text>
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
export default Dolphin;