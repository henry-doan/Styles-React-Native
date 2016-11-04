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
       <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'powderblue'}} />
       <View style={{flex: 2, width: 100, height: 100, backgroundColor: 'skyblue'}} />
       <View style={{flex: 3, width: 150, height: 150, backgroundColor: 'steelblue'}} />
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
