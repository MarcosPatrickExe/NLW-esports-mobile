//import React from 'react';
//import { View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background/index';
import { useRoute } from '@react-navigation/native';


// 'useRoute' PERMITE QUE O COMPONENTE ACESSE OS VALORES DAS PROPRIEDADES PASSADAS À ELE PELO MÉTODO 'navigation.navigate()'

export function Game() {

  const route = useRoute();
  const game = route.params;

  return (
    <Background>
         <SafeAreaView style={ styles.container}>

         </SafeAreaView>
    </Background>
  );
}