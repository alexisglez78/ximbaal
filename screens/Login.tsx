import * as React from 'react';
import { Button, StyleSheet,ScrollView,TextInput } from 'react-native';
import{ useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AsyncStorage from '@react-native-community/async-storage'
import { Component } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Navigation from '../navigation/index';

export const prueba = async (email,password) =>{
    console.log(email+password);
    try {
        const datosUser= {
            'email':email,
            'user':password,
        };
        await AsyncStorage.setItem('user',JSON.stringify(datosUser))
        return true
      } catch (e) {
        console.log(e);
        return false
      }
   
}

const Login = ({
    navigation,route
  }: StackScreenProps<RootStackParamList, 'NotFound'>)  => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const submit = () => {
      prueba(email,password)
      .then(resp => {
         if(resp == true){
            navigation.navigate('Root');
        
         } 

      })
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title='entrar' onPress={submit}  />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
  
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
    },
    button:{
    marginTop:'5%'
    },
});
  
  export default Login;