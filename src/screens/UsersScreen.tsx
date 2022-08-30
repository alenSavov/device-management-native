import React, { useState, useContext, useMemo } from 'react';

import { StateContext } from '../state';
import Users from '../components/Users';

const UsersScreen = () => {
  const { state } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState('');

  const usersWithDevices = useMemo(
    () =>
      state.users
        ?.filter(
          (user) =>
            user.displayName
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
            user.phoneNumber?.toString().includes(searchTerm),
        )
        ?.map(({ id, ...rest }) => ({
          id,
          ...rest,
          devices: state.devices?.filter(({ occupiedBy }) => occupiedBy === id),
        })),
    [state.devices, state.users, searchTerm],
  );

  return (
    <Users
      users={usersWithDevices}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
};

export default UsersScreen;
