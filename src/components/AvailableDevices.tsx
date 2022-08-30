import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../theme';
import styled from 'styled-components/native';

import SwipeableButton from './SwipeableButton';
import { IDevice } from '../state/interfaces';

interface IProps {
  availableDevices: IDevice[];
  occupyDevice: (deviceId: string) => Promise<void>;
}

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
`;

const StyledScrollView = styled.ScrollView`
  margin: 10px 0;
`;

const AvailableDevices = ({ availableDevices, occupyDevice }: IProps) => {
  return (
    <StyledLinearGradient>
      <StyledScrollView>
        {availableDevices.map((device) => (
          <SwipeableButton
            key={device.id}
            device={device}
            occupyDevice={occupyDevice}
            targetCollection="availableDevices"
          />
        ))}
      </StyledScrollView>
    </StyledLinearGradient>
  );
};

export default AvailableDevices;
