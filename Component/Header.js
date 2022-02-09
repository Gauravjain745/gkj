import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function Header() {
    return (<>
     <View style={styles.dis}>
     <View style={styles.header}>
        <Image style={styles.logo} source={require('../HomeEstate-logo-2-.png')} />
        <Text style={styles.heading}>HomeEstate</Text>
        </View>
    
      </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    dis:{
        backgroundColor: '#90EE90', 
      },
      header:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#fff',
     
      },
      
    heading:{
      
      
     
      fontSize:20,
      
      color:'#006400',
    },
    logo:{
      height:30,
      width:30,
      marginLeft: 20,
      marginTop: 20,
      
    },
    
  });
  