//rnbc
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { THEME } from '../../theme/index';

export function Loading() {
  return (
      <View style={styles.container} >
              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
      </View>
  );
}