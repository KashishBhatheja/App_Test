import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import Dashboard from '../../screens/DashboardScreen';
import Watch from '../../screens/WatchScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Dashboard}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <Image style={styles(focused).imageDimensions} source={home} /> */}
              <Text>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Watch'}
        component={Watch}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <Image style={styles(focused).imageDimensions} source={home} /> */}
              <Text>Home</Text>
            </View>
          ),
        }}
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
