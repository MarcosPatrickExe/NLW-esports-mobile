//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import React from 'react';
import{ StatusBar} from 'react-native';
import { Background } from './src/components/Background'; 
import { Loading } from './src/components/Loading';
//import { Home } from './src/screens/Home';
import { Routes} from './src/routes/index';

import {
   useFonts,
   Inter_400Regular,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_900Black
} from '@expo-google-fonts/inter';


// LINK DO FIGMA (CONTÉM A INTERFACE DA APLICAÇÃO ):
// https://www.figma.com/community/file/1150897317533332617


export default function App() {

  // obtendo variavel q irá dizer se as fontes foram carregadas ou nao
  const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_900Black
  });

  return (
      <Background> 
          <StatusBar 
              barStyle="light-content"
              backgroundColor="transparent"
              translucent={true}
          />

          { fontsLoaded ? <Routes/> : <Loading />  }
            
      </Background>
  );
}
