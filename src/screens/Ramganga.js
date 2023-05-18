import React,{useRef} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Dimensions, Button,DrawerLayoutAndroid,Pressable } from 'react-native';
// import { Icon } from 'react-native-vector-icons/icon';
const Ramaganga = ({navigation,route})=>{

  // console.log("data",route.params);
const screenWidth=Dimensions.get('screen').width;
const screenHeight=Dimensions.get('screen').height;
const drawer = useRef(null);

  const navigationView = () => (
  
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={{flex:2,backgroundColor:'#4D979A'}}>
          <TouchableOpacity  style={{height:'10%',paddingLeft:10,justifyContent:'center',borderBottomColor:'#E0DA10',borderBottomWidth:1}}
           onPress={()=>navigation.navigate('About')}>
            <Text style={{justifyContent:'center',paddingLeft:10,fontFamily:'Outfit-Medium',color:'#fff'}}>Games and Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{height:'10%',paddingLeft:10,justifyContent:'center',borderBottomColor:'#E0DA10',borderBottomWidth:1}}
          onPress={()=>navigation.navigate('Lakemap')}>
            <Text style={{justifyContent:'center',paddingLeft:10,fontFamily:'Outfit-Medium',color:'#fff'}}>Success Stories</Text>
          </TouchableOpacity>
      </View>
    </View>
  );


    return (

      <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}>
        <SafeAreaView style={{ flex: 1, marginTop: 0, marginLeft: 0 }}>
          
          <View style={{position: 'absolute', marginTop: 0, bottom: 0}}>
                <Image
                    style={{height: screenHeight, width:screenWidth}}
                    source={require('../assets/background_image.png')}
                />
          </View>
            <View>
        <TouchableOpacity
              style={{}} onPress={() => drawer.current.openDrawer()}>
           <Image source={require('../assets/menu_icon.png')} style={{width:25,height:25,marginTop:45,marginLeft:25}} />
        </TouchableOpacity>
            {/* <Text style={{ color: 'black',fontFamily:'Outfit-SemiBold',fontSize:18,flexDirection:'row',textAlign:'center',width:screenWidth-120,marginLeft:60,marginTop:-26 }}>
              {route.params.title}
            </Text> */}
      </View>
          <View style={{ flex: 1,marginTop:10}}>
            
          <View style={{
            flexDirection: 'row', height: '15%', width: '100%',
            backgroundColor: '#4D979A', 
            marginLeft: 35,
            marginTop:25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius:20,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10}}
                source={require('../assets/Riverbasinmanagement.png')} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 5,
                    marginRight:90,
                }}>
                River Basin Management
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('RiverBasinManagement')}>
                  <Image style={{height:25,width:25}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>




            <View style={{
            flexDirection: 'row', height: '15%', width: '100%',
            backgroundColor: '#4D979A', 
            marginLeft: 35,
            marginTop:25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius:20,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10}}
                source={require('../assets/Aquatic_biodiversity.png')} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 5,
                    marginRight:120,
                }}>
                Aquatic Biodiversity
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('AquaticBiodiversity')}>
                  <Image style={{height:25,width:25}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
            </View>


            


            <View style={{
            flexDirection: 'row', height: '15%', width: '100%',
            backgroundColor: '#4D979A', 
            marginLeft: 35,
            marginTop:25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius:20,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10}}
                source={require('../assets/water_stewardship.png')} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 5,
                    marginRight:125,
                }}>
                Water Stewardship
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('WaterStewardship')}>
                  <Image style={{height:25,width:25}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
          </View>
        
            



          <View style={{
            flexDirection: 'row', height: '15%', width: '100%',
            backgroundColor: '#4D979A', 
            marginLeft: 35,
            marginTop:25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius:20,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10}}
                source={require('../assets/Multi_stakeholder_engagement.png')} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 5,
                    marginRight:50,
                }}>
                Multi-Stakeholder Engagement
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Multi')}>
                  <Image style={{height:25,width:25}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
                
            
            </TouchableOpacity>
          </View>



          <View style={{
            flexDirection: 'row', height: '15%', width: '100%',
            backgroundColor: '#4D979A', 
            marginLeft: 35,
            marginTop:25,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius:20,
             }}>
           <TouchableOpacity style={{alignItems: 'center',flexDirection:'row'}}>
              <Image
                style={{height:40,width:40,marginLeft:10}}
                source={require('../assets/River.png')} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                    fontFamily: 'Outfit-Medium',
                    marginLeft: 5,
                    marginRight:5,
                }}>
                River Wetland Co-management Urban
              </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate('RiverWetland')}>
                  <Image style={{height:25,width:25}} source={require('../assets/next_button.png')}/>
                </TouchableOpacity>
            
            </TouchableOpacity>
          </View>
            
          </View>
          <View style={{ flexDirection:'row-reverse',marginHorizontal:20}}>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                    style={{ height: 60, width: 60,margin:10,marginRight:-5 }}
                    source={require('../assets/home_button.png')}
                    />
                    </Pressable>
            </View>
          

        {/* User Input fields */}
      </SafeAreaView>
      </DrawerLayoutAndroid>
      
    );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    
  },
  navigationContainer: {
    backgroundColor: '#fff',
    justifyContent:'center',
   
  },
  paragraph: {
   
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Ramaganga;