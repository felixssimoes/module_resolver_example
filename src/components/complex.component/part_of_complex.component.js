import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>I'm a part of a complex component!!!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
