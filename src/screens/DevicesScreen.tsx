import React, { useContext, useState, useMemo } from 'react';
import firestore from '@react-native-firebase/firestore';

import Devices from '../components/Devices';
import { StateContext } from '../state';

const DevicesScreen = () => {
  const { state } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState('');
  const deviceCollection = firestore().collection('devices');

  const deleteDevice = async (deviceId: string) => {
    if (!deviceId) {
      return;
    }

    try {
      await deviceCollection.doc(deviceId).delete();
    } catch (e) {
      console.log(e.message);
    }
  };

  const toggleDeviceState = async (deviceId: string) => {
    if (!deviceId) {
      return;
    }
    const deviceDocument = deviceCollection.doc(deviceId);

    try {
      const deviceData = await deviceDocument.get();
      deviceDocument.update({
        state: !deviceData.data()?.state,
        occupiedBy: '',
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const filteredDevices = useMemo(
    () =>
      state.devices.filter(
        (device) =>
          device.make?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          device.model?.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [state.devices, searchTerm],
  );

  return (
    <Devices
      currentUser={state.currentUser}
      devices={filteredDevices}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      deleteDevice={deleteDevice}
      toggleDeviceState={toggleDeviceState}
    />
  );
};

export default DevicesScreen;
