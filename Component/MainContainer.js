import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
// import tw from 'tailwind-react-native-classnames';
export default function MainContainer() {
    return (
        <>
            <View style={MainContainerStyle.Content}>
            <TextInput placeholder='Plz Enter your Address' style></TextInput>
            </View>
        </>
    );
  }

  const MainContainerStyle=StyleSheet.create({
    Content:{
        margin:'auto',
        backgroundColor:'red',
      
    },
  });