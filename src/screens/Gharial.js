import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Gharial = ({ navigation }) => {
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
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Gharial</Text>
        </View>
       
      
          </View>
          

      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>GHARIAL : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Crocodilians are survivors from the great reptilian age and are represented by three families; Crocodylidae, Alligatoridae and Gavialidae. India is home to three species of crocodilians; Mugger or Marsh Crocodile Crocodylus palustris, Salt-water Crocodile Crocodylus porosus and Gharial Gavialis gangeticus. Gharial is the only member of its family (Gavialidae) and has the most elongated snout of all crocodilians. It is placed under Schedule I of the Indian Wildlife (Protection) Act, 1972, is listed as Critically Endangered by the IUCN and is on Appendix I of the CITES. (Convention on
International Trade in Endangered Species of Wild Fauna and Flora).</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>IUCN RED LIST STATUS :</Text>
           <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                ('../../src/assets/dolphin_flow.png')} resizeMode='contain'></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium' }}>THREATS :</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Sand mining and riverbed cultivation encroaches upon the basking and nesting sites and may also disrupt the behaviour of the animal forcing local populations to desert the area. Disturbance and disruption of basking sites reduces habitat quality for the Gharial and damaged eggs reduces recruitment rate of the species, making it harder for populations to replenish. Illegal fishing through use of gill nets for both commercial and subsistence fishing makes animals vulnerable to entanglement. When an animal gets trapped it drowns or is often killed by fishermen in retaliation to the destruction of their nets.</Text>

            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/GharialFree.jpg')}></Image>
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
            

        <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>A narial excrescence (bulbous pot-like growth) is present at the end of the snout in adult males only. They have thick skin covered with smooth epidermal scales that do not overlap. These scales are olive coloured with darker bands along the back and tail. The bony plates (Osteoderms) are found on the dorsal side and serve as an armour. There are about a 106-110 sharp inter locking teeth (all alike in form) along the length of the snout. The tail is laterally compressed and back feet are webbed. Their legs are weak so they move on the ground by sliding their belly as they can’t lift their body off the ground.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Gharial reside exclusively in riverine habitats with deep, clear, fast-flowing waters and steep, sandy banks for basking and nesting activity. The habitat is also characterized by healthy stocks of fish. Yearlings prefer to hide in thick vegetation, roots or branches in the water.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>An adult male generally attains a total body length of 3 to 5m, while an adult female is generally smaller and its total body length ranges from 2.7 to 3.75 m. The body weight of an adult male and female ranges between 159 and 250 kg.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The reported breeding size for females is 2.6m, while that for males is over 3m. A male maintains a harem and guards its territory. Courtship begins in December and mating occurs from January-February. Nesting occurs in between March and April. Females excavate a pitcher-shaped egg chamber depositing up to an average of 60 eggs in a single night, which hatch in 90 days. The eggs are the largest of any crocodilian species, weighing an average of 160 gm. Gharial guard their eggs and young ones.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Gharial are piscivorous (predominantly fish eating) that use a ‘side- ways snap’ wherein the fish usually slides in head first. It can also tear its prey apart by the head jerk technique. While rate of consumption is also temperature related, juvenile and sub-adult Gharial are fairly heavy feeders while larger animals subsist on proportionately less feed.</Text>
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
export default Gharial;