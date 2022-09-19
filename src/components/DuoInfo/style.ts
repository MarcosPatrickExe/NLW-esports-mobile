import { StyleSheet } from 'react-native';
import {THEME } from '../../theme/index'; 


export const styles = StyleSheet.create({
  container: {
        width: '100%',
        marginBottom: 13
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  value: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});