import React, { useState } from 'react';
import CreateDevice from '../components/CreateDevice';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const defaultDeviceInput = {
  model: '',
  make: '',
};

const CreateDeviceScreen = () => {
  const [deviceInput, setDeviceInput] = useState(defaultDeviceInput);
  const navigation = useNavigation();

  const firestoreDevicesRef = firestore().collection('devices');
  const addDevice = async () => {
    const { make, model } = deviceInput;
    if (make === '' || model === '') {
      return;
    }

    try {
      await firestoreDevicesRef.add({
        make: make,
        model: model,
        state: true,
        occupiedBy: '',
      });
    } catch (e) {
      console.log(e.message);
    }
    setDeviceInput(defaultDeviceInput);
    navigation.goBack();
  };

  const inputDeviceInfo = (field: string, value: string) =>
    setDeviceInput({
      ...deviceInput,
      [field]: value,
    });

  return (
    <CreateDevice
      deviceInput={deviceInput}
      inputDeviceInfo={inputDeviceInfo}
      addDevice={addDevice}
    />
  );
};

export default CreateDeviceScreen;
