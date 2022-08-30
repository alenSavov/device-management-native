import React, { useContext, useMemo } from 'react';
import firestore from '@react-native-firebase/firestore';
import { StateContext } from '../state';
import { View } from 'react-native';

import AvailableDevices from '../components/AvailableDevices';

const AvailableDevicesScreen = () => {
  const deviceCollection = firestore().collection('devices');
  const { state } = useContext(StateContext);

  const availableDevices = useMemo(
    () =>
      state.devices.filter(
        (device) => device.occupiedBy === '' && device.state === true,
      ),
    [state.devices],
  );

  const occupyDevice = async (deviceId: string) => {
    if (!deviceId) {
      return;
    }

    await deviceCollection.doc(deviceId).update({
      occupiedBy: state.currentUser?.uid,
    });
  };

  return (
    <View>
      <AvailableDevices
        availableDevices={availableDevices}
        occupyDevice={occupyDevice}
      />
    </View>
  );
};

export default AvailableDevicesScreen;
