import React from 'react';
import UsersScreen from '../screens/UsersScreen';
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

const UsersStack = createStackNavigator();

const UsersStackScreen = () => {
  return (
    <StyledLinearGradient>
      <UsersStack.Navigator>
        <UsersStack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: 'Users',
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
      </UsersStack.Navigator>
    </StyledLinearGradient>
  );
};

export default UsersStackScreen;
