import React, { useContext, useMemo } from 'react';
import { StateContext } from '../state';
import firestore from '@react-native-firebase/firestore';

import MyDevices from '../components/MyDevices';

const MyDevicesScreen = () => {
  const { state } = useContext(StateContext);

  const deviceCollection = firestore().collection('devices');

  const myDevices = useMemo(
    () =>
      state.devices.filter(
        (device) => device.occupiedBy === state.currentUser?.uid,
      ),
    [state.devices, state.currentUser],
  );

  const returnDevice = async (deviceId: string) => {
    if (!deviceId) {
      return;
    }
    try {
      await deviceCollection.doc(deviceId).update({
        occupiedBy: '',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return <MyDevices myDevices={myDevices} returnDevice={returnDevice} />;
};

export default MyDevicesScreen;
