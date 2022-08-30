import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import styled from 'styled-components/native';

import theme from '../theme';

const StyledLinearGradientWrapper = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 20px 20px;
`;

const StyledDropShadow = styled(DropShadow).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 1,
  shadowRadius: 20,
})``;

const StyledText = styled(Text)`
  color: ${theme.buttons.colors.fontColor};
  padding: 0 20px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
`;

const Settings = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <StyledLinearGradientWrapper>
      <SafeAreaView>
        <StyledDropShadow>
          <TouchableOpacity onPress={signOut}>
            <StyledLinearGradient>
              <StyledText>Sign Out</StyledText>
            </StyledLinearGradient>
          </TouchableOpacity>
        </StyledDropShadow>
      </SafeAreaView>
    </StyledLinearGradientWrapper>
  );
};

export default Settings;
