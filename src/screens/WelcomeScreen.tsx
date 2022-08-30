import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import theme from '../theme';
import { isStyledComponent } from 'styled-components/native';

const StyledLoginView = styled(View)`
  background-color: ${theme.colors.mainBackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledLinearGradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [
    theme.buttons.colors.firstGradientColor,
    theme.buttons.colors.secondGradientColor,
  ],
})`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-width: 1.5px;
  border-color: #f504fe;
  height: 50px;
  border-radius: 30px;
  margin: 5px;
`;

const StyledButtonText = styled(Text)`
  color: ${theme.buttons.colors.fontColor};
  padding-right: 10px;
  font-weight: 600;
  font-size: 18px;
`;

const StyledImage = styled(Image)`
  padding: 10px;
  margin: 5px;
  height: 35px;
  width: 35px;
  resize-mode: stretch;
`;

const WelcomeScreen = () => {
  const [isLoginLoading, setLoginLoading] = useState(false);

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    try {
      setLoginLoading(true);
      // Sign-in the user with the credentials
      const { user } = await auth().signInWithCredential(googleCredential);

      // check if the user exist in our database
      //if yes return; if no create new user
      // if (usersCollection.doc(user.id).get())
      const usersCollection = firestore().collection('users');
      const firebaseUser = {
        id: user.uid,
        email: user.email,
        photoURL: user.photoURL,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        roles: ['user'],
      };
      const userRef = usersCollection.doc(user.uid);
      const existingUser = await userRef.get();
      if (!existingUser.exists) {
        usersCollection.doc(user.uid).set(firebaseUser, { merge: true });
      }
    } catch (e) {
      setLoginLoading(false);
    }
  };

  return (
    <StyledLoginView>
      {isLoginLoading ? (
        <ActivityIndicator size="large" color="#F504FE" />
      ) : (
        <>
          <View>
            <Image source={require('../assets/images/deviceInfoLogo.png')} />
          </View>

          <TouchableOpacity onPress={() => onGoogleButtonPress()}>
            <StyledLinearGradient>
              <StyledImage
                source={require('../assets/images/googleIcon.png')}
              />
              <StyledButtonText>Sign In With Google</StyledButtonText>
            </StyledLinearGradient>
          </TouchableOpacity>
        </>
      )}
    </StyledLoginView>
  );
};

export default WelcomeScreen;
