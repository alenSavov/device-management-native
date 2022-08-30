import { useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { StateContext } from '../state';
import { IDevice, IUser } from '../state/interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const AppContainer = ({ children }: IProps) => {
  const { dispatch } = useContext(StateContext);

  // Fetch devices and attach live listeners
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('devices')
      .onSnapshot((querySnapshot) => {
        const devices: IDevice[] = [];
        querySnapshot.forEach((doc) => {
          devices.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        dispatch({
          type: 'LOAD_DEVICES',
          payload: { devices },
        });
      });

    // Stop listening to changes
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  // Fetch users and attach live listeners
  useEffect(() => {
    firestore()
      .collection('users')
      .onSnapshot((querySnapshot) => {
        const users: IUser[] = [];
        querySnapshot.forEach((doc) => {
          const user = doc.data() as IUser;
          users.push(user);
        });
        dispatch({
          type: 'LOAD_USERS',
          payload: { users },
        });
      });
  }, [dispatch]);

  return children;
};

export default AppContainer;
