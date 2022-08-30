import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import DropShadow from 'react-native-drop-shadow';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { View, Image, Text } from 'react-native';
import theme from '../theme';
import { IDevice, IUser } from '../state/interfaces';

interface IProps {
  device: IDevice;
  deviceUser: IUser | undefined;
  targetCollection: string;
}

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})``;
const StyledWrapper = styled(View)`
  width: 100%;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  margin: 8px 0;
`;

const StyledView = styled(View)`
  width: 95%;
`;

const StyledContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const StyledLeftSide = styled(View)`
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const StyledRightSide = styled(View)`
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

const StyledTitle = styled(Text)`
  padding: 19px 0;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 10px;
`;

const StyledInnerTitle = styled(Text)`
  color: ${theme.colors.inenrTitle};
  font-weight: 600;
`;

const StyledAvatar = styled(Image)`
  height: 35px;
  width: 35px;
  border-radius: 40px;
  margin-right: 20px;
  border-width: 1px;
  border-color: #000;
`;

const StyledDropShadow = styled(DropShadow).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.8,
  shadowRadius: 10,
})``;

const StyledDropShadowAvatar = styled(DropShadow).attrs({
  shadowColor: theme.colors.mainBackgroundColor,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.8,
  shadowRadius: 10,
})``;

const Device = ({ device, deviceUser, targetCollection }: IProps) => {
  return (
    <StyledWrapper>
      <StyledView>
        <StyledDropShadow>
          <StyledLinearGradient>
            <StyledContent>
              <StyledLeftSide>
                <StyledTitle>{device.make}</StyledTitle>
                <StyledInnerTitle>{device.model}</StyledInnerTitle>
              </StyledLeftSide>
              <StyledRightSide>
                {targetCollection === 'devices' ? (
                  <>
                    {deviceUser !== undefined ? (
                      <StyledDropShadowAvatar>
                        <StyledAvatar source={{ uri: deviceUser.photoURL }} />
                      </StyledDropShadowAvatar>
                    ) : (
                      <View />
                    )}
                    <EntypoIcon name="chevron-down" size={24} color="#FFF" />
                  </>
                ) : (
                  <MaterialIcon
                    name="gesture-swipe-left"
                    size={24}
                    color="#FFF"
                  />
                )}
              </StyledRightSide>
            </StyledContent>
          </StyledLinearGradient>
        </StyledDropShadow>
      </StyledView>
    </StyledWrapper>
  );
};

export default Device;
