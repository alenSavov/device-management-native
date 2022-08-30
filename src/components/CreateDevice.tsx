import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TextInput } from 'react-native';

import styled from 'styled-components/native';
import theme from '../theme';

interface IProps {
  deviceInput: {
    model: string;
    make: string;
  };
  inputDeviceInfo: (field: string, value: string) => void;
  addDevice: () => Promise<void>;
}

const StyledWrapper = styled(View)`
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

const CreateDevice = ({ deviceInput, inputDeviceInfo, addDevice }: IProps) => {
  return (
    <StyledWrapper>
      <StyledTextInput
        placeholder="Make"
        value={deviceInput.make}
        onChangeText={(value) => inputDeviceInfo('make', value)}
      />
      <StyledTextInput
        placeholder={'Model'}
        value={deviceInput.model}
        onChangeText={(value) => inputDeviceInfo('model', value)}
      />

      <StyledTouchebleOpaccity onPress={addDevice}>
        <StyledLinearGradient>
          <StyledText>Create</StyledText>
        </StyledLinearGradient>
      </StyledTouchebleOpaccity>
    </StyledWrapper>
  );
};

export default CreateDevice;
