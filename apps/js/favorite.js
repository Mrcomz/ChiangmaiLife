'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  }
});

class favorite extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          This is favorite
        </Text>
      </View>
    );
  }
}

module.exports = favorite;
