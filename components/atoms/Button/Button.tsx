import React from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

interface Props {
  onPress: () => void;
  secondOnPress?: () => void;
  text: String;
  widthFull?: boolean;
  second_text?: String;
}

export default function Button(props: Props) {
  const { onPress, text, widthFull, second_text, secondOnPress } = props

  if (widthFull) {
    return (
        <View style={styles.buttons_container}>
            <TouchableOpacity
                style={widthFull ? styles.button_full : styles.button}
                onPress={onPress}
             >
                <Text style={styles.button_text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
  }

  return (
    <View style={styles.buttons_container}>
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        >
        <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={secondOnPress}
        >
        <Text style={styles.button_text}>{second_text}</Text>
        </TouchableOpacity>
    </View>
  );
  
}
