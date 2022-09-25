import React, {useRef, useEffect} from 'react';
import{ StatusBar} from 'react-native';
import { Background } from './src/components/Background'; 
import { Loading } from './src/components/Loading';
import { Routes} from './src/routes/index';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import {Subscription} from 'expo-modules-core';
import * as Notifications from 'expo-notifications';


import './src/services/notificationConfigs';// ARQUIVO DE CONFIGURAÇÃO DE NOTFICAÇÇOES
import { getPushNotificationToken } from './src/services/getPushNotificationToken';// ARQUIVO NECESSÁRIO PARAR OBTER O TOKEN DO DISPOSITIVO E REALIZAR A EMISSÃO DE NOTIFICAÇÃO




// LINK DO FIGMA (CONTÉM A INTERFACE DA APLICAÇÃO ):
// https://www.figma.com/community/file/1150897317533332617


// DICAS DE FEATURES PARA COLOCAR NA APLICAÇÃO:
// NOTIFICAR USUÁRIOS PARA AVISAR QUE NOVO ANUNCIO DE UM JOGO FOI PUBLICADO


export default function App() {

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect( ()=>{
     getPushNotificationToken();
  });

  useEffect( ()=>{
      //ESSA CONSTANTE VAI FICAR "ESCUTANDO" NOTIFICAÇÕES TODA VEZ QUE ALGUMA CHEGAR E ASSIM EXECUTAR O CALLBACK
      getNotificationListener.current = Notifications.addNotificationReceivedListener( 
           (notify: Notifications.Notification)=>{
                  console.log("Notificação obtida: "+notify);
      });

      //ESSA CONSTANTE VAI EXECUTAR O CALLBACK TODA VEZ QUE UMA NOTIFICAÇÃO FOR RESPONDIDA
      responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(  
           (responseNotify: Notifications.NotificationResponse)=>{
                  console.log("Notificação respondida: "+responseNotify);
      });


      // ESSE RETURN QUE IRÁ FAZER A LIMPEZA DOS LISTENERS DA MEMÓRIA
      return ()=>{
            if(getNotificationListener.current && responseNotificationListener.current){
                   Notifications.removeNotificationSubscription( getNotificationListener.current );
                   Notifications.removeNotificationSubscription( responseNotificationListener.current );
            }
      }

      // EH POSSIVEL FAZER UMA EMISSAO DE NOTIFICACAO DO BACKEND, FAZENDO UMA REQUISIÇÃO VIA POST PARA UM SERVIÇO, NO QUAL IRÁ REDIRECIONAR A NOTIFICAÇÃO PARA CÁ
      // TBM EH POSSIVEL EMITIR ESSA NOTIFICAÇÃO MANUALMENTE (docs.expo.dev/push-notifications/sending-notifications/) E DETECTAR ELA AQUI ATRAVÉS DO SITE "expo.dev/notifications"
  }, []);




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
