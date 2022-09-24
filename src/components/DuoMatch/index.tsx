import {useState} from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading/index';
import  * as Clipboard from 'expo-clipboard';




interface Props extends ModalProps{
    discord: string;
    oncloseFunc: ()=> void;
}




export function DuoMatch(  {discord, oncloseFunc, ...othersModalProperties }:Props ) {

    const [isCopping, setIsCopping] = useState(false);


   // FUNÇÃO RENSPOSÁVEL POR ADICIONAR O DISCORD DO ANÚNCIO PARA O CLIPBOARD DO DISPOSITIVO DO USUÁRIO
   async function handleCopyDiscordToClipboard(){
        setIsCopping(true);
        await Clipboard.setStringAsync(discord);
        Alert.alert("Discord copiado!", "Usuário copiado para você colar no Discord!");
        setIsCopping(false);
   }


  return (
    <Modal animationType="slide" transparent={true}  statusBarTranslucent={true}  {...othersModalProperties}>

            <View style={styles.container}>
                <View style={styles.content}> 
                   
                   {/* BOTÃO DE FECHAR MODAL */}
                    <TouchableOpacity style={ styles.closeButtonX } onPress={ oncloseFunc}>
                         <MaterialIcons 
                            name="close"
                            size={30}
                            color={ THEME.COLORS.TEXT }
                         />
                    </TouchableOpacity>


                    <CheckCircle 
                        style={{ alignSelf: 'center'}}
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading 
                        title="Let's play!"
                        subtitle="Agora é só começar a jogar"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />


                    <Text style={styles.label}>
                         Adicione no discord:
                    </Text>


                    <TouchableOpacity disabled={isCopping} style={styles.discordButton} onPress={ handleCopyDiscordToClipboard}>
                         
                         <Text style={styles.discord}>
                             { isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
                         </Text>
                    </TouchableOpacity>
                </View>
            </View>
    </Modal>
  );
}