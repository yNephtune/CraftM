import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppTab from './AppTab';

export default function App() {
  return (
   <>
      <AppTab/>
      <StatusBar style='light'/>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fe0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});