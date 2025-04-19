// Nguyễn Bá Tuân
// 2124802010170

import React from 'react';
// import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './components/buoi3_17042025/LoginScreen_1';
import CreateNewAccountScreen from './components/buoi3_17042025/CreateNewAccountScreen';
import ForgotPasswordScreen from './components/buoi3_17042025/ForgotPasswordScreen';

export type RootStackParamList = {
  Login: {registeredEmail?: string} | undefined;
  CreateAccount: undefined;
  ForgotPassword: {userId?: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateNewAccountScreen}
            options={{title: 'Create New Account'}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{title: 'Reset Password'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
