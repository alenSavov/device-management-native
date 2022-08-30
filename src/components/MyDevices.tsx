import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import SwipeableButton from './SwipeableButton';
import theme from '../theme';
import { IDevice } from '../state/interfaces';

interface IProps {
  myDevices: IDevice[];
  returnDevice: (deviceId: string) => Promise<void>;
}

const StyledLinearGradientWrapper = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
`;

const StyledScrollView = styled(ScrollView)`
  margin: 10px 0;
`;

const MyDevices = ({ myDevices, returnDevice }: IProps) => {
  return (
    <StyledLinearGradientWrapper>
      <StyledScrollView>
        {myDevices.map((device) => (
          <SwipeableButton
            key={device.id}
            device={device}
            returnDevice={returnDevice}
            targetCollection="myDevices"
          />
        ))}
      </StyledScrollView>
    </StyledLinearGradientWrapper>
  );
};

export default MyDevices;
