import React from 'react';
import { AccordionList } from 'accordion-collapse-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import theme from '../theme';
import Search from './Search';
import User from './User';
import { IDevice, IUser } from '../state/interfaces';

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 1, y: 1 },
  end: { x: 1, y: 0 },
  colors: [theme.colors.bgGradientColor1, theme.colors.bgGradientColor2],
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const StyledSearchBarWrapper = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledContent = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledUserDevices = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 100%;
`;

const StyledDeviceTitle = styled(Text)`
  font-size: 15px;
  margin-right: 10px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
`;

const StyledInnerTitle = styled(Text)`
  color: ${theme.colors.inenrTitle};
  font-weight: 600;
`;

const StyledFlatList = styled(FlatList)`
  justify-content: center;
  align-items: center;
  width: 92%;
  margin: 10px 0 30px 0;
`;

const StyledLinearGradientWrapper = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})`
  width: 92%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 15px 30px;
  margin: 5px 5px;
`;

type IUserWithDevices = IUser & {
  devices: IDevice[];
};

// interface INew extends IUser {
//   devices: IDevice[];
// }

interface IProps {
  users: IUserWithDevices[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Users = ({ users, setSearchTerm }: IProps) => {
  const renderUsersHeader = (user: IUserWithDevices) => {
    return <User user={user} />;
  };

  const renderUsersContent = (user: IUserWithDevices) => {
    return (
      <StyledContent>
        <StyledFlatList
          data={user.devices}
          key={user.id}
          renderItem={({ item }: { item: any }) => (
            <StyledLinearGradientWrapper>
              <StyledUserDevices key={item.id}>
                <StyledDeviceTitle>{item.make}</StyledDeviceTitle>
                <StyledInnerTitle>{item.model}</StyledInnerTitle>
              </StyledUserDevices>
            </StyledLinearGradientWrapper>
          )}
        />
      </StyledContent>
    );
  };

  return (
    <StyledLinearGradient>
      <StyledSafeAreaView>
        <StyledSearchBarWrapper>
          <Search
            setSearchTerm={setSearchTerm}
            placeholderValue="Search by name, email, phone.."
          />
        </StyledSearchBarWrapper>
        <AccordionList
          list={users}
          header={renderUsersHeader}
          body={renderUsersContent}
        />
      </StyledSafeAreaView>
    </StyledLinearGradient>
  );
};

export default Users;
