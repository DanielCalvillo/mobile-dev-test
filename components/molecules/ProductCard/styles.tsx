import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    product: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: '0.25rem'
    },
    image: {
      width: '3.5rem',
      height: '3.5rem',
      borderRadius: 10,
      backgroundColor: 'grey',
      marginRight: '0.5rem'
    },
    product_description: {
      flex: 1,
      marginTop: '0.3rem'
    },
    product_title: {
      marginBottom: '0.4rem',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 14,
      lineHeight: 19,
    },
    product_date: {
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 16,
    },
    redemption: {
      color: '#03B833',
      fontWeight: 'bold',
      fontSize: 16
    },
    not_redemption: {
      color: '#FF0200',
      fontWeight: 'bold',
      fontSize: 16
    },
    arrow_right: {
      height: '1rem',
      width:'1rem',
      marginTop: '0.4rem'
    },
    product_points_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    product_points: {
      fontFamily: 'Avenir',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 16,
      lineHeight: 22,
      marginRight: '2rem',
      marginTop: '0.1rem'
    }
  });

  export default styles