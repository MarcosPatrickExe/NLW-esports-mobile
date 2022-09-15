import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

//rnso
export const styles = StyleSheet.create({
     container: {
        marginTop: 10,
        marginRight: 5,
        transform: [{scale: 0.9}]
     },
     cover: {
        width: 240,
        height: 320,
        justifyContent: 'flex-end',
        borderRadius: 8,
        overflow: 'hidden'
     },
     footer: {
        width: '100%',
        height: 102,
        padding: 16,
        justifyContent: 'flex-end'
     },
     name: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD
     },
     ads: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR
     }
});