import React from 'react';
import { StyleSheet , View, Text , Image,SafeAreaView,TouchableOpacity,Dimensions, Pressable  } from 'react-native';

const AquaticBio = ({navigation})=>{

const screenWidth=Dimensions.get('screen').width;
const screenHeight=Dimensions.get('screen').height;
    return (
        <SafeAreaView style={{flex: 2,marginTop:199,marginLeft:0}}>
          <View style={{position: 'absolute', marginTop: 0, bottom: 0}}>
                <Image
                    style={{height: screenHeight, width:screenWidth}}
                    source={require('../assets/background_image.png')}
                />
        </View>
        <View >
        <View style={{height:'25%',marginTop:-199,backgroundColor:'#4D979A',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Ramganga')}>
        <Image source={require('../assets/back_white.png')} style={{width:20,height:20,marginRight:270,marginTop:70}}  />
        </TouchableOpacity>
        <View style={{marginLeft:70,marginTop:-20}}>
        <Text style={{color:'#fff',fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Aquatic Biodiversity</Text>
        </View>
       
      
            

      </View>
        <View style={{marginTop:100,marginBottom:50}}>
           <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '22%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:-50,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/Dolphin.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Dolphin
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Dolphin')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:5}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>


            <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '22%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/Gharial.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Gharial
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Gharial')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:5}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>

                   <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '22%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/turtles.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Turtles
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Turtles')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:10}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>





              <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '22%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/otters.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Otters
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Otters')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:15}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>



              <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '22%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/Mahseer.png')} />
              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Mahseer
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Masheer')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:-3}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>

        </View>

        </View>
        <View style={{ flexDirection:'row-reverse',marginHorizontal:20,marginTop:-45}}>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={{ height: 60, width: 60,margin:10,marginRight:-5 }}
                    source={require('../assets/home_button.png')}
                    />
                    </Pressable>
            </View>

        {/* User Input fields */}
      </SafeAreaView>
    );

};

export default AquaticBio;