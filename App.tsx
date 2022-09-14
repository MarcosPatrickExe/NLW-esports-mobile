//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import{ StatusBar} from 'react-native';
import { Background } from './src/components/Background/index'; 

import {
   useFonts,
   Inter_400Regular,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_900Black,
} from '@expo-google-fonts/inter';




// LINK DO FIGMA:
// https://www.figma.com/community/file/1150897317533332617


export default function App() {

  // obtendo variavel q ira dizer se as fontes foram carregadas ou nao
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
              translucent
              >
          </StatusBar>

          { fontsLoaded ? Status }
      </Background>
  );
}
