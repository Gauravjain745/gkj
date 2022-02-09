import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Header from './Header';
export default function App() {
  return (<>
   <Header/>
   <TextInput placeholder='Plz Enter your Address' style></TextInput>
    </>
  );
}