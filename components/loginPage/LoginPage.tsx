import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { Text } from 'react-native-paper'
import Background from './components/Background'
import Logo from './components/Logo'
import Header from './components/Header'
import Button from './components/Button'
import TextInput from './components/TextInput'
import BackButton from './components/BackButton'
import { theme } from './core/theme'
import { emailValidator } from './helpers/emailValidator'
import { passwordValidator } from './helpers/passwordValidator'

export const onLogin = async (email,password) =>{
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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      console.log(email,'email')
      console.log(password)
      onLogin(email.value,password.value)
      .then(resp => {
        if(resp == true){
           navigation.navigate('Root');
       
        } 

     })
      
    }
  }

  return (
    <Background>
      {/* <Logo /> */}
      <Header>Ximbaap</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
