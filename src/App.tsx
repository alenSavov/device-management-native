/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useReducer, useCallback } from 'react';

import { AppRegistry, StatusBar } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import Navigation from './navigation/Navigation';
import firestore from '@react-native-firebase/firestore';
import { Provider as PaperProvider } from 'react-native-paper';

import { reducer, initialState, StateContext } from './state';
import theme from './theme';
import WelcomeScreen from './screens/WelcomeScreen';
import AppContainer from './containers/AppContainer';

AppRegistry.registerComponent('App', () => App);

const App = () => {
  // Initialise the context state
  const [state, dispatch] = useReducer(reducer, initialState);
  const [initializing, setInitializing] = useState(true);
  const isLoggedIn = auth().currentUser;

  const onAuthStateChanged = useCallback(
    async (user) => {
      const usersCollection = firestore().collection('users');
      const userRef = usersCollection.doc(user?.uid);
      const existingUser = await userRef.get();

      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            ...existingUser.data(),
            ...user?._user,
          },
        },
      });
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing],
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '360196751882-idjn6j180k2cnj5jq0m5f52qtv0neulk.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, [onAuthStateChanged]);

  if (initializing) {
    return null;
  }

  StatusBar.setBarStyle('light-content', true);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <PaperProvider theme={theme}>
        {isLoggedIn ? (
          <AppContainer>
            <Navigation />
          </AppContainer>
        ) : (
          <WelcomeScreen />
        )}
      </PaperProvider>
    </StateContext.Provider>
  );
};

export default App;
