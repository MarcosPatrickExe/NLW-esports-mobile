import React from 'react';
import { styles } from './style';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

// INTERFACE PUBLICA PARA O COMPONENTE PAI 'HOME'
export interface GameCardProps {
    id: string,
    title: string,
    _count: {
        ads: string
    },
    bannerUrl: string  // PODERIA SER DO TIPO 'ImageSourcePropType'
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
                    source={ {uri: data.bannerUrl} }>
                            {/* uri: define que a imagem será buscada no endereco passado */}

                            <LinearGradient colors={ THEME.COLORS.FOOTER} style= { styles.footer }>
                                    <Text style={ styles.name }>
                                        {data.title}
                                    </Text>

                                    <Text style={ styles.ads }>
                                        {data._count.ads} Anúncio(s)
                                    </Text>
                            </LinearGradient>

                </ImageBackground>

        </TouchableOpacity>
    );
}