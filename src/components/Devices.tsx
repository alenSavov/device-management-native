import React, { useContext } from 'react';
import {
  View,
  Image,
  Text,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { AccordionList } from 'accordion-collapse-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';
import Search from './Search';
import { useNavigation } from '@react-navigation/native';

import Device from './Device';
import theme from '../theme';
import { StateContext } from '../state';
import { ADMIN } from '../constants';
import { CurrentUser, IDevice } from '../state/interfaces';

interface IProps {
  devices: IDevice[];
  currentUser: CurrentUser;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  deleteDevice: (deviceId: string) => Promise<void>;
  toggleDeviceState: (deviceId: string) => Promise<void>;
}

const StyledLinearGradientWrapper = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  position: relative;
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
`;

const StyledContentWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledContent = styled(View)`
  width: 85%;
  margin-top: 20px;
`;

const StyledUserContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin: 15px 0;
`;

const StyledAvatar = styled(Image)`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  margin-right: 10px;
`;

const StyledText = styled(Text)`
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledButtonText = styled(Text)`
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
`;

const StyledButtonsWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const StyledContentButtonText = styled(TouchableOpacity)`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
`;

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})`
  width: 100%;
  padding: 10px 30px;
  border-radius: 20px;
`;

const StyledCreateButtonWrapper = styled(View)`
  border-radius: 40px;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
`;

const StyledCreateButton = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})`
  border-radius: 40px;
  padding: 15px;
  align-self: center;
`;

const Devices = ({
  currentUser,
  devices,
  setSearchTerm,
  deleteDevice,
  toggleDeviceState,
}: IProps) => {
  const { state } = useContext(StateContext);
  const isAdmin = currentUser?.roles[0].toLowerCase() === ADMIN;
  const navigation = useNavigation();

  const renderDevicesHeader = (device: IDevice) => {
    const deviceUser = state.users.find(
      (user) => user.id === device.occupiedBy,
    );

    return (
      <Device
        device={device}
        deviceUser={deviceUser}
        targetCollection="devices"
      />
    );
  };

  const renderDevicesContent = (device: IDevice) => {
    const deviceUser = state.users.find(
      (user) => user.id === device.occupiedBy,
    );
    return (
      <StyledContentWrapper>
        <StyledContent>
          {device.occupiedBy ? (
            <StyledUserContent>
              <StyledAvatar source={{ uri: deviceUser?.photoURL }} />
              <StyledText>{deviceUser?.displayName}</StyledText>
            </StyledUserContent>
          ) : (
            <StyledUserContent>
              <StyledText>State: </StyledText>
              <StyledText>Available</StyledText>
            </StyledUserContent>
          )}
          <StyledUserContent>
            <StyledText>Model: </StyledText>
            <StyledText>{device.model}</StyledText>
          </StyledUserContent>
          {isAdmin ? (
            <StyledButtonsWrapper>
              <StyledContentButtonText
                onPress={() => navigation.navigate('Edit', device)}
              >
                <StyledLinearGradient>
                  <StyledButtonText>Edit</StyledButtonText>
                </StyledLinearGradient>
              </StyledContentButtonText>
              <StyledContentButtonText onPress={() => deleteDevice(device.id)}>
                <StyledLinearGradient>
                  <StyledButtonText>DELETE</StyledButtonText>
                </StyledLinearGradient>
              </StyledContentButtonText>
              <Switch
                trackColor={{ false: '#313A44', true: '#313A44' }}
                thumbColor={device.state ? '#CF3875' : '#485467'}
                ios_backgroundColor="#313A44"
                onChange={() => toggleDeviceState(device.id)}
                value={device.state}
              />
            </StyledButtonsWrapper>
          ) : (
            <View />
          )}
        </StyledContent>
      </StyledContentWrapper>
    );
  };

  return (
    <StyledLinearGradientWrapper>
      <StyledSafeAreaView>
        <Search
          setSearchTerm={setSearchTerm}
          placeholderValue="Search by Make and Model"
        />

        <View style={{ marginBottom: '40%' }}>
          <AccordionList
            list={devices}
            header={renderDevicesHeader}
            body={renderDevicesContent}
          />
        </View>

        {isAdmin ? (
          <StyledCreateButtonWrapper>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <StyledCreateButton>
                <Icon name="add" style={{ color: '#FFF' }} size={40} />
              </StyledCreateButton>
            </TouchableOpacity>
          </StyledCreateButtonWrapper>
        ) : (
          <View />
        )}
      </StyledSafeAreaView>
    </StyledLinearGradientWrapper>
  );
};

export default Devices;
