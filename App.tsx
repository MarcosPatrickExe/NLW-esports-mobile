import React from 'react';
import{ StatusBar} from 'react-native';
import { Background } from './src/components/Background'; 
import { Loading } from './src/components/Loading';
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


// DICAS DE FEATURES PARA COLOCAR NA APLICAÇÃO:
// NOTIFICAR USUÁRIOS PARA AVISAR QUE NOVO ANUNCIO FOI PUBLICADO



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
