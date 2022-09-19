import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center'
  },
  header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 32,
      marginTop: 28,
      justifyContent: 'space-between'
  },
  title:{
     marginTop: 16,
     marginRight: 75
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    width: 290,
    height: 140,
    borderRadius: 8,
    marginTop: 19,
    marginBottom: '0%'
  }
});