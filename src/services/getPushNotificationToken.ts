import * as Notifications from 'expo-notifications';
import { ExpoPushToken } from 'expo-notifications';


//CRIANDO FUNÇÃO BUSCA TOKEM QUE IDENTIFICA O DISPOSITIVO
export async function getPushNotificationToken(){
    const {granted} = await Notifications.getPermissionsAsync();// VERIFICA SE O USUÁRIO AUTORIZOU O RECEBIMENTO DE NOTIFICAÇÕES
    
    if(!granted)
        await Notifications.requestPermissionsAsync();// SOLICITANDO PERMISSÃO PARA BUSCA DO TOKEN CASO O USUÁRIO AINDA NÃO TENHA DADO AUTORIZAÇÃO
    
    if(granted){
        const pushToken = await Notifications.getExpoPushTokenAsync();//OBTENDO TOKEN QUE IDENTIFICA O DISPOSITIVO
        console.log("Notification token =>"+pushToken.data);

        return pushToken;
        // O TOKEN DO DISPOSITIVO QUE RODOU ESSA APLICAÇÃO É:
        // ExponentPushToken[MweLEHNTWRvE23Ik8DniFf]
        // DIGITE ESSE TOKEN NA EMISSÃO DE NOTIFICAÇÃO ATRAVÉS DO SITE DO EXPO (https://expo.dev/notifications) OU ATRAVÉS DE UMA REQUISIÇÃO DO BACKEND (docs.expo.dev/push-notifications/sending-notifications/)
    }
}