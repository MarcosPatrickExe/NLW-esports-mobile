import React from 'react';
import { View, Text, ColorValue } from 'react-native';
import { styles } from './style';
import { THEME } from '../../theme/index';



interface Props{
    label: string;
    value: string;
    colorValue?: ColorValue;
}


export function DuoInfo( {label, value, colorValue=THEME.COLORS.TEXT }:Props ) {

  return (
    <View style={styles.container}>

        <Text style={styles.label}>
            {label}
        </Text>

        <Text
          style={ [styles.value, {color: colorValue}] }
          numberOfLines={1}>
          {/* A PROPRIEDADE 'numberOfLines' FAZ COM QUE O TEXTO FIQUE COM RETICÊNCIAS CASO ELE SEJA GRANDE */}
            {value}
        </Text>
    </View>
  );
}