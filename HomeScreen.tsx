import React, { useEffect, useContext, useState } from 'react';
const moment = require('moment')
import { Button, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LeftArrow from './LeftArrow'

const fakeArray = ['', '', '', '', '']
import { MyContext} from './Context'

export default function HomeScreen({ navigation }: any) {
  const [allProducts, setAllProducts] = useState(true)
  const { points,myData, updateMyData, get_redemption_products, get_not_redemption_products, ShowAllProducts, setShowAllProducts } = useContext(MyContext);

  useEffect(() => {
    updateMyData()
  }, [])
  console.log(ShowAllProducts)
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
        {myData !== null && myData.map((product: any) => {
            const date = moment(product.createdAt).format("MMMM Do YYYY")
            return <TouchableOpacity style={styles.product} onPress={() => navigation.navigate('Details', {product})}>
            <View style={styles.image}>
                <Image  source={{ uri: product.image }} style={styles.image}/>
            </View>
            <View style={styles.product_description}>
                <Text style={styles.product_title}>{product.product}</Text>
                <Text style={styles.product_date}>{date}</Text>
            </View>
            <View style={styles.product_points_container}>
                {product.is_redemption === true ? 
                 <Text style={styles.not_redemption}>
                    -
                </Text> 
                :
                <Text style={styles.redemption}>
                    +
                </Text>
                }
                
                <Text style={styles.product_points}>
                    {product.points}
                </Text>
                <View style={styles.arrow_right}>
                    <LeftArrow />
                </View>
            </View>
        </TouchableOpacity>
        })}
        
      </View>
      {ShowAllProducts === false ? 
         <View style={styles.buttons_container}>
         <TouchableOpacity style={styles.button} onPress={async () =>  { setAllProducts(true); setShowAllProducts(true); return await get_redemption_products()}}>
             <Text style={styles.button_text}>Ganados</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={async () =>  { setAllProducts(true); setShowAllProducts(true); return await get_not_redemption_products()}}>
             <Text style={styles.button_text}>Canjeables</Text>
         </TouchableOpacity>
        </View>
      : 
        <View style={styles.buttons_container}>
          <TouchableOpacity style={styles.button_full} onPress={async () =>  { setAllProducts(false); setShowAllProducts(false); return await updateMyData()}}>
              <Text style={styles.button_text}>Todos</Text>
          </TouchableOpacity>
        </View>
      }
      
    </SafeAreaView>
  );
}

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