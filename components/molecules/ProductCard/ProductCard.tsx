import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LeftArrow from '../../../LeftArrow'
import styles from './styles'
const moment = require('moment')

export interface Product {
    createdAt: string;
    image: string;
    is_redemption: boolean;
    points: number;
    product: string;
  }
  

interface CardProps {
    product: Product;
    onPress: () => void;
}

const Card: React.FC<CardProps> = ({ product, onPress }) => {
    const date = moment(product.createdAt).format('MMMM Do YYYY');
    return (
      <TouchableOpacity 
        style={styles.product} 
        onPress={onPress}
      >
        <View style={styles.image}>
          <Image source={{ uri: product.image }} style={styles.image}/>
        </View>
        <View style={styles.product_description}>
          <Text style={styles.product_title}>{product.product}</Text>
          <Text style={styles.product_date}>{date}</Text>
        </View>
        <View style={styles.product_points_container}>
          
          {product.is_redemption && <Text style={styles.not_redemption}>-</Text>}
          {!product.is_redemption && <Text style={styles.redemption}>+</Text>}
  
          <Text style={styles.product_points}>
            {product.points}
          </Text>
          <View style={styles.arrow_right}>
            <LeftArrow />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

export default Card