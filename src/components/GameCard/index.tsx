import React from 'react';
import { styles } from './style';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

// INTERFACE PUBLICA PARA O COMPONENTE PAI 'HOME'
export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

// ESSA INTERFACE CONTEM UMA PROPRIEDADE PERSONALIZAVEL E AS DEMAIS ADVEM DA INTERFACE 'TouchableOpacityProps'
interface Props extends TouchableOpacityProps {
    data: GameCardProps
}


//rnbc
export function GameCard( {data, ...othersProperties}: Props ) {
    return (
        <TouchableOpacity style={styles.container}   {...othersProperties}>
              
                <ImageBackground
                    style={ styles.cover}
                    source={ data.cover }>

                            <LinearGradient colors={ THEME.COLORS.FOOTER} style= { styles.footer }>
                                    <Text style={ styles.name }>
                                        {data.name}
                                    </Text>

                                    <Text style={ styles.ads }>
                                        {data.ads}
                                    </Text>
                            </LinearGradient>

                </ImageBackground>

        </TouchableOpacity>
    );
}