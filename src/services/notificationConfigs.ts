import * as Notifications from 'expo-notifications';


// CONFIGURANDO AS NOTIFICAÇÕES DO APP:
Notifications.setNotificationHandler({
    handleNotification: async ()=>({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
});
