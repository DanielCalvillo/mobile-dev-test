import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: '#f8f8f8'
    },
    welcome_container: {
      marginBottom: '1.5rem',
      backgroundColor: '#cfd6ff',
      width: '100%',
      height: '15%'
    },
    title: {
      marginBottom: '0.4rem',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 24,
      lineHeight: 19,
      marginTop: 'auto',
      paddingLeft: '1rem',
      paddingBottom: '1.2rem'
    },
    image_container: {
      height: '50%',
      width: '100%',
      marginBottom: '2rem',
      paddingHorizontal: '1rem'
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      backgroundColor: 'grey',
      marginRight: '0.5rem',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.7)',
    },
    sub_title: {
      fontSize: 14,
      color: '#9B9898',
      fontWeight: '900',
      marginBottom: '1rem',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      lineHeight: 19,
      paddingHorizontal: '1rem'
    },
    aquired_date: {
      marginBottom: '1.3rem',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 14,
      lineHeight: 19,
      paddingHorizontal: '1rem',
    },
    points_aquired: {
      marginTop: '1rem',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 24,
      lineHeight: 19,
      paddingHorizontal: '1rem',
    }, 
    buttons_container: {
      marginTop: '3.3rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: '1rem'
    },
    button_text: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
    },
    button_full: {
      backgroundColor: '#334FFA',
      width: '100%',
      borderRadius: 10,
      paddingHorizontal: '1rem',
      paddingVertical: '1rem',
      marginBottom: '2rem',
    },
  });

  export default styles