import React, { useEffect,useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './style';
import { DuoInfo } from '../DuoInfo/index';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native';


export interface DuoCardProps{
    id: string;
    hourEnd: string;
    hourStart: string;
    nickName: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps,
    onConnect: ()=> void;
}



export function DuoCard( {data, onConnect} :Props ) {

  return (
    <View style={styles.container}>

        <DuoInfo 
            label="Nome"
            value={data.nickName}
        />

        <DuoInfo 
            label="Tempo de jogo"
            value={`${data.yearsPlaying} anos`}
        />

        <DuoInfo 
            label="Disponibilidade"
            value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />

        <DuoInfo 
            label="Chamada de áudio?"
            value={ (data.useVoiceChannel) ? "Sim":"Não" }
            colorValue={ (data.useVoiceChannel) ? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT }
        />


        <TouchableOpacity style={ styles.button} onPress={ onConnect}>
                <GameController 
                    color={ THEME.COLORS.TEXT}
                    size={ 20}
                />

                <Text style={ styles.buttonTitle }>
                     Conectar
                </Text>
        </TouchableOpacity>

    </View>
  );
}