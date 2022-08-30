import React from 'react';
import CreateDeviceScreen from '../screens/CreateDeviceScreen';
import EditDeviceScreen from '../screens/EditDeviceScreen';
import DevicesScreen from '../screens/DevicesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import theme from '../theme';

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
`;

const DevicesStack = createStackNavigator();

const DevicesStackScreen = () => {
  return (
    <StyledLinearGradient>
      <DevicesStack.Navigator>
        <DevicesStack.Screen
          name="Devices"
          component={DevicesScreen}
          options={{
            title: 'All Devices',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: theme.colors.bgGradientColor2,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
          }}
        />
        <DevicesStack.Screen
          name="Create"
          component={CreateDeviceScreen}
          options={{
            title: 'Create Device',
            headerStyle: { backgroundColor: theme.colors.mainBackgroundColor },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
            headerBackTitleVisible: false,
          }}
        />
        <DevicesStack.Screen
          name="Edit"
          component={EditDeviceScreen}
          options={{
            title: 'Edit Device',
            headerStyle: { backgroundColor: theme.colors.mainBackgroundColor },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
            headerBackTitleVisible: false,
          }}
        />
      </DevicesStack.Navigator>
    </StyledLinearGradient>
  );
};

export default DevicesStackScreen;
