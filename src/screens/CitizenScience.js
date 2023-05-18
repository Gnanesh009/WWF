import React from 'react';
import { StyleSheet , View, Text , Image,SafeAreaView,TouchableOpacity,Dimensions,Pressable  } from 'react-native';

const CitizenScience = ({navigation})=>{

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
        <View style={{height:'35%',marginTop:-199,backgroundColor:'#E0DA10',borderBottomLeftRadius:45,borderBottomRightRadius:45}}>
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Multi')}>
        <Image source={require('../assets/backarrow.png')} style={{width:20,height:20,marginRight:270,marginTop:70}}  />
        </TouchableOpacity>
        <View style={{marginLeft:70,marginTop:-20}}>
        <Text style={{color:'#000',fontSize:18,justifyContent:'center',fontFamily:'Outfit-Medium'}}>Citizen Science</Text>
        </View>
       
      
      </View>
        <View style={{marginTop:100}}>
           <View style={{
            flexDirection: 'row',
              borderTopLeftRadius: 25,
              borderBottomLeftRadius:25,
              marginLeft: 45,
              marginRight:0,
              height: '40%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#4D979A',
              marginTop:-40,
             }} >
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/humare_talab_humari_dharovar.png')} />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                Humare Talab, Humari Dharovar
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('HumareTalab')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:-65}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>
            <View style={{
            flexDirection: 'row',
              borderTopLeftRadius: 25,
              borderBottomLeftRadius:25,
              marginLeft: 45,
              marginRight:0,
              height: '40%',
              alignItems: 'center',
              paddingTop: 15,
              backgroundColor: '#4D979A',
              marginTop:15,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10,marginBottom:10}}
                source={require('../assets/impact_report.png')} />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 15,
                    marginRight: 120,
                   marginBottom:10,
                }}>
                RHA
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('RHA')}>
                  <Image style={{height:30,width:30,marginBottom:10,marginLeft:65}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>

        </View>

        </View>
        <View style={{ flexDirection:'row-reverse',marginHorizontal:20,marginTop:15}}>
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

export default CitizenScience;