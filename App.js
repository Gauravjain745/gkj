import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  return (<>
  <Image
        
        source={require('.\logo\HomeEstate-logo-2-.png')}
      />
     <Text style={styles.heading}>HomeEstate</Text>
    <View style={styles.container}>
     
      <Text>Please Enter Your Address</Text>
      <TextInput placeholder='We will predict your house price'></TextInput>
      <StatusBar style="auto" />
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    flex: 0,
    backgroundColor: '#fff',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
