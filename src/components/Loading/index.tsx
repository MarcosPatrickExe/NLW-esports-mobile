//rnbc
import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './style';
import { THEME } from '../../theme/index';

export function Loading() {
  return (
      <View style={styles.container} >

              <Text style={{ color: 'white', fontSize: 20, opacity:.7 }}>Carregando fontes....</Text>

              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
      </View>
  );
}