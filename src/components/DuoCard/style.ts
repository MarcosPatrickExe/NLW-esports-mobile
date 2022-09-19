import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
     width: 190,
     height: 250,
     backgroundColor: THEME.COLORS.SHAPE,
     borderRadius: 8,
     padding: 15,
     marginRight: 16,
     marginTop: 15,
     alignItems: 'center'
  },
  button:{
    width: 12,
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8
  }

});