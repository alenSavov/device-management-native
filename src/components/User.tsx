import React from 'react';
import styled from 'styled-components';
import { View, Image, Text } from 'react-native';

import theme from '../theme';

const StyledHeaderWrapper = styled(View)`
  border-top-width: 1px;
  border-color: #474b53;
  padding: 15px;
`;

const StyledHeader = styled(View)`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

const StyledAvatar = styled(Image)`
  height: 60px;
  width: 60px;
  border-radius: 40px;
  margin: 2px;
`;

const StyledImageWrapper = styled(View)`
  width: 20%;
`;

const StyledTitleWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  width: 80%;
  height: 100%;
  margin-left: 10px;
`;

const StyledDisplayName = styled(Text)`
  color: #fff;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const StyledInnerTitle = styled(Text)`
  color: ${theme.colors.inenrTitle};
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
`;

const StyledEmail = styled(Text)`
  color: ${theme.colors.inenrTitle};
  width: 100%;
  font-size: 16px;
`;

const User = ({ user }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledImageWrapper>
          <StyledAvatar
            source={
              user.photoURL
                ? { uri: user.photoURL }
                : require('../assets/images/defaultUserImage.png')
            }
          />
        </StyledImageWrapper>
        <StyledTitleWrapper>
          <StyledDisplayName>{user.displayName}</StyledDisplayName>
          <StyledInnerTitle>{user.email}</StyledInnerTitle>
          <StyledEmail>{user.phoneNumber}</StyledEmail>
        </StyledTitleWrapper>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default User;
