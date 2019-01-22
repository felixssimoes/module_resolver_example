import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SuperUsefulComponent from 'components/super_useful.component';
import ComplexComponent from 'components/complex.component';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <SuperUsefulComponent />
        <ComplexComponent />
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
