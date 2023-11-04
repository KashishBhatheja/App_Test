import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import WatchScreen from '../screens/WatchScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MediaLibraryScreen from '../screens/MediaLibraryScreen';
import MoreScreen from '../screens/MoreScreen';
import IMAGES from '../assets/Images/index';
import constants from '../assets/Constants/constants';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  let tintColor = focused ? 'white' : '#827D88';
  let icon;

  switch (route.name) {
    case constants.DASHBOARD:
      icon = IMAGES.iconDashboard;
      break;
    case constants.MEDIA_LIB:
      icon = IMAGES.iconMediaLib;
      break;
    case constants.MORE:
      icon = IMAGES.iconMore;
      break;
    default:
      icon = IMAGES.iconWatch;
  }

  return <Image source={icon} style={{tintColor: tintColor, marginTop: 10}} />;
};

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={({route}) => ({
          tabBarInactiveTintColor: '#827D88',
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontSize: 10},
          tabBarStyle: {
            backgroundColor: '#2E2739',
            borderRadius: 25,
            height: '10%',
          },
          tabBarIcon: ({focused}) => getTabBarIcon(route, focused),
        })}>
        <Tab.Screen name={constants.DASHBOARD} component={DashboardScreen} />
        <Tab.Screen name={constants.Watch} component={WatchScreen} />
        <Tab.Screen name={constants.MEDIA_LIB} component={MediaLibraryScreen} />
        <Tab.Screen name={constants.MORE} component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
