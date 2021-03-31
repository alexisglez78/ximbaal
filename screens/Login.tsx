import * as React from 'react';
import { Button, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Component } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Navigation from '../navigation/index';
import LoginPage from '../components/loginPage/LoginPage'
import Signup from '../components/loginPage/Signup';


const Login = ({
  navigation, route
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [auth, setauth] = useState(false)


  if (!auth) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <LoginPage navigation={navigation} />
      </ScrollView>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Signup />
      </ScrollView>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;