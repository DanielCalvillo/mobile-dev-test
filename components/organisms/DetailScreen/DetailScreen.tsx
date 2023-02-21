import React from 'react';
const moment = require('moment')
import { SafeAreaView, Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles'
import { Button } from '../../atoms'


export default function DetailScreen( {navigation}: any) {
  const route = useRoute();
  const product: any = route?.params?.product
  const date = moment(product.createdAt).format("MMMM Do YYYY")
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome_container}>
        <Text style={styles.title}>{product.product}</Text>
      </View>
      <View style={styles.image_container}>
          <Image  source={{ uri: product.image }} style={styles.image}/>
      </View>
      <Text style={styles.sub_title}>Detalles del producto:</Text>
      <Text style={styles.aquired_date}>Comprado el {date}</Text>
      <Text style={styles.sub_title}>Con esta compra acumulaste</Text>
      <Text style={styles.points_aquired}>{product.points} puntos</Text>
      <View style={styles.buttons}>
        <Button onPress={() => navigation.navigate('Home')}  text='Aceptar' widthFull />
      </View>
    </SafeAreaView>
  );
}
