import React, { useEffect, useContext, useState } from 'react';
const moment = require('moment')
import { SafeAreaView, Text, View , TouchableOpacity } from 'react-native';

import { MyContext} from '../../../Context'
import { ProductCard } from '../../molecules';
import { Product } from '../../molecules/ProductCard/ProductCard'
import { Button } from '../../atoms'

import styles from './styles'

interface Props {
  navigation: any;
}

export default function HomeScreen({ navigation }: Props) {
  const { 
    points,
    myData, 
    updateMyData, 
    getRedemptionProducts, 
    getNotRedemptionProducts, 
    showAllProducts, 
    setShowAllProducts,
    error,
    loading
  } = useContext(MyContext);

  useEffect(() => {
    updateMyData()
  }, [])

  const handleGetProducts = async (isRedemption: boolean) => {
    setShowAllProducts(true);
    if (isRedemption) {
       await getRedemptionProducts();
    } else {
       await getNotRedemptionProducts();
    }
  };
  const handleGetAllProducts = async () => {
    setShowAllProducts(false);
    await updateMyData();
  };


  let productListContent = myData?.map((product: Product) => (
    <ProductCard 
      key={product.product}  
      product={product}
      onPress={() => navigation.navigate('Details', {product})}
    />
  ));
  if (loading) {
    productListContent = <Text style={styles.title}>Cargando datos...</Text>
  }
  if (error) {
    productListContent = <Text style={styles.title}>Error Obteniendo datos</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome_container}>
        <Text style={styles.title}>Bienvenido de vuelta!</Text>
        <Text style={styles.name}>Ruben Rodriguez</Text>
      </View>
  
      <Text style={styles.sub_title}>TUS PUNTOS</Text>
  
      <View style={styles.points_container}>
        <Text style={styles.month}>Diciembre</Text>
        <Text style={styles.points}>{points} pts</Text>
      </View>
  
      <Text style={styles.sub_title}>TUS MOVIMIENTOS</Text>
      <View style={styles.products_container}>
        {productListContent}
      </View>
      {!showAllProducts && (
        <Button 
          onPress={() => handleGetProducts(true)} 
          text="Ganados" 
          second_text="Canjeables"  
          secondOnPress={() => handleGetProducts(true)} 
        />
      )}
      {showAllProducts && ( 
        <Button 
          widthFull 
          onPress={handleGetAllProducts} 
          text="Todos" 
        />
      )}
      
    </SafeAreaView>
  );
  
}

