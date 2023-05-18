import React from 'react';
import { StyleSheet , View, Text , Image,SafeAreaView,TouchableOpacity,Dimensions,Pressable  } from 'react-native';

const WaterStewardship = ({navigation})=>{

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
        <View style={{height:'35%',marginTop:-199,backgroundColor:'#4D979A',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Ramganga')}>
        <Image source={require('../assets/back_white.png')} style={{width:20,height:20,marginRight:270,marginTop:70}}  />
        </TouchableOpacity>
        <View style={{marginLeft:70,marginTop:-20}}>
        <Text style={{color:'#fff',fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Water Stewardship</Text>
        </View>
       
      
            

      </View>
        <View style={{marginVertical:100}}>
           <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginRight:45,
              height: '32%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:-40,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}} >
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                  source={require('../assets/clean_technology.png')} />
                
                <TouchableOpacity 
                  onPress={() => navigation.navigate('CleanTechnologies')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:200}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>

              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: -220,
                   marginBottom:10,
                }}>
                Clean technologies
              </Text>
              
            
            </TouchableOpacity>
            </View>


            <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '32%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                  source={require('../assets/WaterFootprint.png')} />
                
                <TouchableOpacity 
                onPress={() => navigation.navigate('WaterFootprint')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:200}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>

              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: -220,
                   marginBottom:10,
                }}>
                Water footprint
              </Text>
              
            
            </TouchableOpacity>
            </View>

                   <View style={{
            flexDirection: 'row',
              borderTopRightRadius: 25,
              borderBottomRightRadius:25,
              marginLeft: 0,
              marginRight:45,
              height: '32%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#E0da10',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                  source={require('../assets/urban_river_managemnt_plans.png')} />
                
                <TouchableOpacity 
                onPress={() => navigation.navigate('UrbanRiverManagementPlans')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:200}} source={require('../assets/next_button_2.png')}/>
                </TouchableOpacity>

              <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft:-220,
                    marginTop:-20,
                   marginBottom:10,
                }}>
                Urban river 
                </Text>
                <Text
                style={{
                  color: '#000',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft:-88,
                    marginTop:10,
                   marginBottom:10,
                }}>
                management plans 
                </Text>
                
              
            
            </TouchableOpacity>
            </View>

        </View>

        </View>
        <View style={{ flexDirection:'row-reverse',marginHorizontal:20,marginTop:-40}}>
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

export default WaterStewardship;