import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Header from './Header';
import MainContainer from './MainContainer';
export default function App() {
  return (<>
   <Header/>
   <MainContainer/>
    </>
  );
}