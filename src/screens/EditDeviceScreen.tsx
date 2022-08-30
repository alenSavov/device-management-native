import React, { useState } from 'react';
import EditDevice from '../components/EditDevice';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';

const EditDeviceScreen = ({ route }) => {
  const device = route.params;
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const deviceCollection = firestore().collection('devices');

  const navigation = useNavigation();

  const editDevice = async (deviceId: string) => {
    if (!deviceId || make === '' || model === '') {
      return;
    }
    try {
      await deviceCollection.doc(deviceId).update({
        make: make,
        model: model,
      });
    } catch (e) {
      console.log(e.message);
    }

    navigation.goBack();
  };

  return (
    <EditDevice
      device={device}
      editDevice={editDevice}
      make={make}
      setMake={setMake}
      model={model}
      setModel={setModel}
    />
  );
};

export default EditDeviceScreen;
