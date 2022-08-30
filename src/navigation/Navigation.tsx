import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MatterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

import HomeStackScreen from './HomeStackScreen';
import DevicesStackScreen from './DevicesStackScreen';
import UsersStackScreen from './UsersStackScreen';

import SettingsScreen from '../screens/SettingsScreen';

import theme from '../theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            backgroundColor: theme.colors.bgGradientColor1,
            borderTopWidth: 0,
          },
          showLabel: false,
          activeTintColor: '#bc03ff',
          inactiveTintColor: '#CF3875',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Devices"
          component={DevicesStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MatterialIcons name="devices" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Users"
          component={UsersStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon name="users" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontistoIcons name="player-settings" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
