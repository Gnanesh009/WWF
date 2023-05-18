import React, {useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../src/screens/HomeScreen';
import Ramganga from '../../src/screens/Ramganga';
import Wildlife from '../../src/screens/Wildlife';
import WWF from '../../src/screens/WWF';
import RiverBasinManagement from '../../src/screens/RiverBasinManagement';
import Multi from '../../src/screens/Multi';
import AquaticBiodiversity from '../../src/screens/AquaticBiodiversity';
import RiverWetland from '../../src/screens/RiverWetland';
import WaterStewardship from '../../src/screens/WaterStewardship';
import eflows from '../../src/screens/eflows';
import agriwater from '../../src/screens/agriwater';
import freeflowing from '../../src/screens/freeflowing';
import SplashScreen from '../../src/screens/SplashScreen';
import MoradSpecific from '../../src/screens/MoradSpecific';
import ImpactReport from '../../src/screens/ImpactReport';
import Dolphin from '../screens/Dolphin';
import Gharial from '../screens/Gharial';
import Turtles from '../screens/Turtles';
import Otters from '../screens/Otters';
import Masheer from '../screens/Masheer';
import CleanTechnologies from '../screens/CleanTechnologies';
import WaterFootprint from '../screens/WaterFootprint';
import UrbanRiverManagementPlans from '../screens/UrbanRiverManagementPlans';
import DistrictGangaCommittee from '../screens/DistrictGangaCommittee';
import MeetOurMitras from '../screens/MeetOurMitras';
import CitizenScience from '../screens/CitizenScience';
import Rural from '../screens/Rural';
import MoradabadSpecific from '../screens/MoradabadSpecific';
import Karula from '../screens/Karula';
import MoradMetalware from '../screens/MoradMetalware';
import CounterCurrent from '../screens/CounterCurrent';
import AV from '../screens/AV';
import KanpurLeather from '../screens/KanpurLeather';
import Iot from '../screens/Iot';
import WFC from '../screens/WFC';
import CalculateWF from '../screens/CalculateWF';
import OutreachWF from '../screens/OutreachWF';
import {navigatorRef} from '../navigator';
import Moradabad from '../screens/Moradabad';
import Barielly from '../screens/Barielly';
import CommunityTurtle from '../screens/CommunityTurtle';
import Industries from '../screens/Industries';
import City from '../screens/City';
import Farmer from '../screens/Farmer';
import HumareTalab from '../screens/HumareTalab';
import RHA from '../screens/RHA';
import Games from '../screens/Games';
import SuccessStories from '../screens/SuccessStories';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenListeners={{
          state: e => {
            setLoading(!loading);
            const routes = navigatorRef.getState()?.routes;
            if (routes && routes?.length) {
              const prevRoute = routes[routes?.length - 1];
              const name = navigatorRef.getCurrentRoute()?.name;
              if (name == 'HomeScreen' && prevRoute.name != name) {
                navigatorRef.reset({index: 0, routes: [{name}]});
              }
            }
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WWF"
          component={WWF}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ramganga"
          component={Ramganga}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wildlife"
          component={Wildlife}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RiverBasinManagement"
          component={RiverBasinManagement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Multi"
          component={Multi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AquaticBiodiversity"
          component={AquaticBiodiversity}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RiverWetland"
          component={RiverWetland}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaterStewardship"
          component={WaterStewardship}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="eflows"
          component={eflows}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="agriwater"
          component={agriwater}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="freeflowing"
          component={freeflowing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoradSpecific"
          component={MoradSpecific}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImpactReport"
          component={ImpactReport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dolphin"
          component={Dolphin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gharial"
          component={Gharial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Turtles"
          component={Turtles}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otters"
          component={Otters}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Masheer"
          component={Masheer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CleanTechnologies"
          component={CleanTechnologies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaterFootprint"
          component={WaterFootprint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UrbanRiverManagementPlans"
          component={UrbanRiverManagementPlans}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DistrictGangaCommittee"
          component={DistrictGangaCommittee}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MeetOurMitras"
          component={MeetOurMitras}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CitizenScience"
          component={CitizenScience}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rural"
          component={Rural}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoradabadSpecific"
          component={MoradabadSpecific}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Karula"
          component={Karula}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoradMetalware"
          component={MoradMetalware}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CounterCurrent"
          component={CounterCurrent}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AV" component={AV} options={{headerShown: false}} />
        <Stack.Screen
          name="KanpurLeather"
          component={KanpurLeather}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Iot"
          component={Iot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WFC"
          component={WFC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalculateWF"
          component={CalculateWF}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OutreachWF"
          component={OutreachWF}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Moradabad"
          component={Moradabad}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Barielly"
          component={Barielly}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CommunityTurtle"
          component={CommunityTurtle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Industries"
          component={Industries}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Farmer"
          component={Farmer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="City"
          component={City}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HumareTalab"
          component={HumareTalab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RHA"
          component={RHA}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Games"
          component={Games}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessStories"
          component={SuccessStories}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Auth;
