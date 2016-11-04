import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigblue}>Just blue</Text>
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigblue}>Just blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
