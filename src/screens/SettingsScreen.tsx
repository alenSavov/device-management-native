import * as React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

import Settings from '../components/Settings';

const StyledWrapper = styled(View)`
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

const SettingsScreen = () => {
  return (
    <StyledWrapper>
      <Settings />
    </StyledWrapper>
  );
};

export default SettingsScreen;
