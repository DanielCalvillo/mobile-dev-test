import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: '1rem',
      backgroundColor: '#f8f8f8'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 0,
    },
    name: {
      fontSize: 16
    },
    welcome_container: {
      marginBottom: '1.5rem'
    },
    sub_title: {
      fontSize: 14,
      color: '#9B9898',
      fontWeight: 'bold',
      marginBottom: '1rem'
      
    },
    points_container: {
      marginHorizontal: 'auto',
      backgroundColor: '#334FFA',
      width: '80%',
      borderRadius: 20,
      paddingHorizontal: '1rem',
      paddingVertical: '1.2rem',
      marginBottom: '1rem',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
    },
    month: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 16,
      paddingBottom: '0.5rem'
    },
    points: {
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
      paddingHorizontal: '2rem',
      paddingBottom: '1.8rem'
    },
    products_container: {
      backgroundColor: 'white',
      paddingVertical: '1rem',
      paddingHorizontal: '0.5rem',
      width: '100%',
      borderRadius: 12,
      marginBottom: '2rem'
    },
    buttons_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    button: {
      backgroundColor: '#334FFA',
      width: '48%',
      borderRadius: 10,
      paddingHorizontal: '1rem',
      paddingVertical: '1.2rem',
      marginBottom: '1rem',
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
      paddingVertical: '1.2rem',
      marginBottom: '1rem',
    },
  });
  export default styles