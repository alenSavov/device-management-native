import React from 'react';
import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../theme';
import styled from 'styled-components/native';
import { IDevice } from '../state/interfaces';

interface IProps {
  device: IDevice;
  editDevice: (deviceId: string) => Promise<void>;
  make: string;
  setMake: React.Dispatch<React.SetStateAction<string>>;
  model: string;
  setModel: React.Dispatch<React.SetStateAction<string>>;
}

const Wrapper = styled(View)`
  background-color: ${theme.colors.mainBackgroundColor};
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const StyledTextInput = styled(TextInput)`
  width: 90%;
  margin: 10px;
  border-radius: 30px;
  background-color: #fff;
  padding: 20px;
`;

const StyledTouchebleOpaccity = styled.TouchableOpacity`
  color: ${theme.buttons.colors.fontColor};
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
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
  margin-top: 25px;
`;

const StyledText = styled(Text)`
  color: ${theme.buttons.colors.fontColor};
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
`;

const EditDevice = ({
  device,
  editDevice,
  make,
  setMake,
  model,
  setModel,
}: IProps) => {
  return (
    <View>
      <Wrapper>
        <StyledTextInput
          placeholder={device.make}
          value={make}
          onChangeText={(value: string) => setMake(value)}
        />

        <StyledTextInput
          placeholder={device.model}
          value={model}
          onChangeText={(value: string) => setModel(value)}
        />

        <StyledTouchebleOpaccity onPress={() => editDevice(device.id)}>
          <StyledLinearGradient>
            <StyledText>Save</StyledText>
          </StyledLinearGradient>
        </StyledTouchebleOpaccity>
      </Wrapper>
    </View>
  );
};

export default EditDevice;
