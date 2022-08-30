import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

import Device from './Device';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import theme from '../theme';
import { IDevice } from '../state/interfaces';

const StyledReactButton = styled(RectButton)`
  background-color: ${theme.colors.bgGradientColor2};
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

interface IProps {
  device: IDevice;
  returnDevice?: (deviceId: string) => Promise<void>;
  occupyDevice?: (deviceId: string) => Promise<void>;
  targetCollection: string;
}

const SwipeableButton = ({
  device,
  returnDevice,
  occupyDevice,
  targetCollection,
}: IProps) => {
  const renderRightActions = (dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 0],
    });

    if (targetCollection === 'availableDevices') {
      if (occupyDevice) {
        return (
          <StyledReactButton
            style={{ backgroundColor: 'transparent' }}
            onPress={() => {
              occupyDevice(device.id);
            }}
          >
            <Animated.Text
              style={[
                {
                  transform: [{ translateX: trans }],
                  color: '#FFF',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                },
              ]}
            >
              Get Device
            </Animated.Text>
          </StyledReactButton>
        );
      }
    }
    if (targetCollection === 'myDevices') {
      if (returnDevice) {
        return (
          <StyledReactButton
            style={{ backgroundColor: 'transparent' }}
            onPress={() => {
              returnDevice(device.id);
            }}
          >
            <Animated.Text
              style={[
                {
                  transform: [{ translateX: trans }],
                  color: '#FFF',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                },
              ]}
            >
              Return
            </Animated.Text>
          </StyledReactButton>
        );
      }
    }
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Device
        device={device}
        deviceUser={undefined}
        targetCollection={targetCollection}
      />
    </Swipeable>
  );
};

export default SwipeableButton;
