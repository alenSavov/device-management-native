import React from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';
import DropShadow from 'react-native-drop-shadow';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

interface IProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  placeholderValue: string;
}

const StyledSearchBarWrapper = styled(View)`
  width: 100%;
  margin: 30px 0 10px 0;
  position: relative;
`;

const StyledDropShadow = styled(DropShadow).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.8,
  shadowRadius: 10,
})`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledTextInput = styled(TextInput)`
  padding: 14px 15px;
  width: 90%;
  justify-content: center;
  border-radius: 8px;
  font-size: 15px;
  color: #000;
  background-color: #fff;
  margin: 0 0 20px 0;
`;

const StyledIconEvilIcons = styled(IconEvilIcons)`
  color: #000;
  position: absolute;
  right: 25px;
  opacity: 0.6;
  top: 11px;
`;

const Search = ({ setSearchTerm, placeholderValue }: IProps) => {
  return (
    <StyledSearchBarWrapper>
      <StyledDropShadow>
        <StyledTextInput
          onChangeText={(keyword: string) => setSearchTerm(keyword)}
          placeholder={placeholderValue}
        />
        <StyledIconEvilIcons name="search" size={30} />
      </StyledDropShadow>
    </StyledSearchBarWrapper>
  );
};

export default Search;
