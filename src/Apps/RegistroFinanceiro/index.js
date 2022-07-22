import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import firebase from '../../firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './routes'
import AuthProvider from './contexts/auth';

console.disableYellowBox=true;

export default function RegistroFinanceiro() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}


