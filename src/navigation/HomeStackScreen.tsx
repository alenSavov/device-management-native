import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';

import MyDevicesScreen from '../screens/MyDevicesScreen';
import AvailableDevicesScreen from '../screens/AvailableDevicesScreen';
import theme from '../theme';
import styled from 'styled-components';

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
`;

const StyledAreaView = styled(SafeAreaView)`
  height: 100%;
`;

const HomeStack = createMaterialTopTabNavigator();

const HomeStackScreen = () => {
  return (
    <StyledLinearGradient>
      <StyledAreaView>
        <HomeStack.Navigator
          tabBarOptions={{
            pressOpacity: 1,
            tabStyle: {
              backgroundColor: theme.colors.bgGradientColor1,
              opacity: 0.9,
              shadowColor: '#FFF',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 6.46,

              elevation: 9,
            },
            activeTintColor: '#fff',
            labelStyle: {
              fontWeight: '600',
            },
            indicatorStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <HomeStack.Screen
            name="AvailableDevices"
            component={AvailableDevicesScreen}
            options={{
              title: 'Available Devices',
            }}
          />
          <HomeStack.Screen
            name="MyDevices"
            component={MyDevicesScreen}
            options={{
              title: 'My Devices',
            }}
          />
        </HomeStack.Navigator>
      </StyledAreaView>
    </StyledLinearGradient>
  );
};

export default HomeStackScreen;
