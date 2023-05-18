import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity,StatusBar} from 'react-native';
import { ScrollView,Dimensions,Image,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth=Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Turtles = ({ navigation }) => {
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
        <Text style={{color:"black",fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Turtles</Text>
        </View>
       
      
      </View>
      <ScrollView>
        <Text style={{ fontSize: 14,textAlign:'justify',marginTop:18 ,marginLeft:18,fontFamily:'Outfit-Medium'}}>FRESHWATER TURTLES : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>There are 13 species of freshwater turtles identified in the Upper Ganga River. Of these, 6 species are considered endangered and categorized in Schedule I of the Indian Wildlife (Protection)
Act, 1972. WWF-India is conducting in-situ turtle conservation programme with the approach of seeking maximum involvement of riparian communities (river bed cultivators) by encouraging
community-led biological monitoring ensuring a sense of ownership and desire for stewardship towards biodiversity conservation and river health in particular.
</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>IUCN RED LIST STATUS :</Text>
           <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                ('../../src/assets/dolphin_flow.png')} resizeMode='contain'></Image>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium' }}>THREATS :</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Turtles are poached for their meat and other body parts believed to possess therapeutic properties. Encroachment of habitat due to palage (river bed cultivation) and sand mining activity leads to loss of basking and nesting sites and often eggs get destroyed which adversely impacts nesting success. Fishing through use of gill nets and hooks makes animals vulnerable to entanglement. Nest predation by humans and animals like jackals and monitor lizards increases egg mortality and reduces recruitment rate.</Text>

            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>SCIENTIFIC NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Pangshura smithii</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>LOCAL NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Brahmany, Chapatua</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>MORPHOLOGICAL FEATURES : </Text>
            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/TurtleFree.jpg')}></Image>
          
            
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
            
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Ranges from large rivers to drainage canals, deep to shallow riffles of the Ganga and Indus River system. Sand banks and islands are the preferred basking and nesting sites.
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>The Carapace length is 230mm.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Nesting takes place during the winter (October - November)
Clutch size: 5-9 eggs
Egg size: 22-25 X 40-42 mm.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, marginTop: 1, fontFamily: 'Outfit-Light' }}>Omnivores (Water plants and fishes).</Text>



            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>SCIENTIFIC NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Batagur dhongoka</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>LOCAL NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Dhor, Dhuria</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>MORPHOLOGICAL FEATURES : </Text>
            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/TurtleFree.jpg')}></Image>
          
            
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
            
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Occurs in large rivers like Brahmaputra and Ganga. Prefers deep flowing rivers with sufficient submerged aquatic vegetation.
Occasionally sand banks and mid- channel islands are preferred for basking.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Size: Carapace length upto 408mm.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Nesting is in winter (mid January to April) Clutch size: 21-35 eggs
Egg size: 32-41 X 52-66 mm.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, marginTop: 1, fontFamily: 'Outfit-Light' }}>Omnivores (Water plants and fish).</Text>




             <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>SCIENTIFIC NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Pangshura tecta</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium', marginBottom: 1 }}>LOCAL NAME : </Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', margin: 18, fontFamily: 'Outfit-Light' }}>Pachera</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>MORPHOLOGICAL FEATURES : </Text>
            <View>
        <Image style ={{height:screenHeight/3, width:screenWidth/1.1,margin:18}}
          source={require
                  ('../../src/assets/TurtleFree.jpg')}></Image>
          
            
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
            
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18, fontFamily: 'Outfit-Medium',marginBottom:18 }}>HABITAT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Occurs in slow flowing rivers like Ramganga, Sharda, and Gambhiri and their associated wetlands. Sand banks and islands are preferred for basking and nesting.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>SIZE AND WEIGHT : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Size: Carapace length upto 180 mm .</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>BREEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Nesting takes place in winter months (October-November)
Clutch Size: 3-14 eggs, Egg Size: 37x21mm.</Text>
            <Text style={{ fontSize: 14, textAlign: 'justify', marginLeft: 18,  fontFamily: 'Outfit-Medium',marginBottom:18 }}>FEEDING HABITS : </Text>
             <Text style={{ fontSize: 14,textAlign:'justify',margin:18,marginTop:1, fontFamily:'Outfit-Light' }}>Adults are omnivorous, hatchlings are herbivorous.</Text>
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
export default Turtles;