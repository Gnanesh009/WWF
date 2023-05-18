import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Ramganga from './src/screens/Ramganga';
import WWF from './src/screens/WWF';
import Wildlife from './src/screens/Wildlife';
import RiverBasinManagement from './src/screens/RiverBasinManagement';
import Multi from './src/screens/Multi';
import AquaticBiodiversity from './src/screens/AquaticBiodiversity';
import RiverWetland from './src/screens/RiverWetland';
import WaterStewardship from './src/screens/WaterStewardship';
import eflows from './src/screens/eflows';
import agriwater from './src/screens/agriwater';
import freeflowing from './src/screens/freeflowing';
import SplashScreen from './src/screens/SplashScreen';
import MoradSpecific from './src/screens/MoradSpecific';
import ImpactReport from './src/screens/ImpactReport';
import Dolphin from './src/screens/Dolphin';
import Gharial from './src/screens/Gharial';
import Turtles from './src/screens/Turtles';
import Otters from './src/screens/Otters';
import Masheer from './src/screens/Masheer';
import CleanTechnologies from './src/screens/CleanTechnologies';
import WaterFootprint from './src/screens/WaterFootprint';
import UrbanRiverManagementPlans from './src/screens/UrbanRiverManagementPlans';
import DistrictGangaCommittee from './src/screens/DistrictGangaCommittee';
import MeetOurMitras from './src/screens/MeetOurMitras';
import CitizenScience from './src/screens/CitizenScience';
import Rural from './src/screens/Rural';
import MoradabadSpecific from './src/screens/MoradabadSpecific';
import Karula from './src/screens/Karula';
import MoradMetalware from './src/screens/MoradMetalware';
import CounterCurrent from './src/screens/CounterCurrent';
import AV from './src/screens/AV';
import KanpurLeather from './src/screens/KanpurLeather';
import Iot from './src/screens/Iot';
import WFC from './src/screens/WFC';
import CalculateWF from './src/screens/CalculateWF';
import OutreachWF from './src/screens/OutreachWF';
import Barielly from './src/screens/Barielly';
import Moradabad from './src/screens/Moradabad';
import CommunityTurtle from './src/screens/CommunityTurtle';
import Industries from './src/screens/Industries';
import Farmer from './src/screens/Farmer';
import City from './src/screens/City';
import HumareTalab from './src/screens/HumareTalab';
import RHA from './src/screens/RHA';
import Games from './src/screens/Games';
import SuccessStories from './src/screens/SuccessStories';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="WWF" component={WWF} />
        <stack.Screen name="Ramganga" component={Ramganga} />
        <stack.Screen name="Wildlife" component={Wildlife} />
        <stack.Screen
          name="RiverBasinManagement"
          component={RiverBasinManagement}
        />
        <stack.Screen name="Multi" component={Multi} />
        <stack.Screen
          name="AquaticBiodiversity"
          component={AquaticBiodiversity}
        />
        <stack.Screen name="RiverWetland" component={RiverWetland} />
        <stack.Screen name="WaterStewardship" component={WaterStewardship} />
        <stack.Screen name="eflows" component={eflows} />
        <stack.Screen name="agriwater" component={agriwater} />
        <stack.Screen name="freeflowing" component={freeflowing} />
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen name="MoradSpecific" component={MoradSpecific} />
        <stack.Screen name="ImpactReport" component={ImpactReport} />
        <stack.Screen name="Dolphin" component={Dolphin} />
        <stack.Screen name="Gharial" component={Gharial} />
        <stack.Screen name="Turtles" component={Turtles} />
        <stack.Screen name="Otters" component={Otters} />
        <stack.Screen name="Masheer" component={Masheer} />
        <stack.Screen name="CleanTechnologies" component={CleanTechnologies} />
        <stack.Screen name="WaterFootprint" component={WaterFootprint} />
        <stack.Screen
          name="UrbanRiverManagementPlans"
          component={UrbanRiverManagementPlans}
        />
        <stack.Screen
          name="DistrictGangaCommittee"
          component={DistrictGangaCommittee}
        />
        <stack.Screen name="MeetOurMitras" component={MeetOurMitras} />
        <stack.Screen name="CitizenScience" component={CitizenScience} />
        <stack.Screen name="Rural" component={Rural} />
        <stack.Screen name="MoradabadSpecific" component={MoradSpecific} />
        <stack.Screen name="Karula" component={Karula} />
        <stack.Screen name="MoradMetalware" component={MoradMetalware} />
        <stack.Screen name="CounterCurrent" component={CounterCurrent} />
        <stack.Screen name="AV" component={AV} />
        <stack.Screen name="KanpurLeather" component={KanpurLeather} />
        <stack.Screen name="Iot" component={Iot} />
        <stack.Screen name="WFC" component={WFC} />
        <stack.Screen name="CalculateWF" component={CalculateWF} />
        <stack.Screen name="OutreachWF" component={OutreachWF} />
        <stack.Screen name="Moradabad" component={Moradabad} />
        <stack.Screen name="Barielly" component={Barielly} />
        <stack.Screen name="CommunityTurtle" component={CommunityTurtle} />
        <stack.Screen name="Industries" component={Industries} />
        <stack.Screen name="Farmer" component={Farmer} />
        <stack.Screen name="City" component={City} />
        <stack.Screen name="HumareTalab" component={HumareTalab} />
        <stack.Screen name="RHA" component={RHA} />
        <stack.Screen name="Games" component={Games} />
        <stack.Screen name="SuccessStories" component={SuccessStories} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
