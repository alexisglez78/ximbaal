import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AsyncStorage from '@react-native-community/async-storage'


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [user,useUser] = useState(true);
  
  useEffect(() => {  
   AsyncStorage.getItem('user')
   .then(resp => {
     if(resp){
       var respuesta =JSON.parse(resp);
    // console.log(Object.values(respuesta));
      useUser(false);
    }else{
      useUser(true);
     
     }
   })
     });

  if (!isLoadingComplete) {
    return null;
  } else {

//     if(user){
// return <Login ></Login>
//     }else{
      return (
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      );
    }
  }
// }


