import React from 'react';
import { View } from 'react-native';
import Login from './src/components/Login';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View>
      <Logo />
      <Login />
    </View>
  );
}