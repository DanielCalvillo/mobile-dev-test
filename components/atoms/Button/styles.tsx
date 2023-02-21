import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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