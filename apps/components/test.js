'use strict';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import mockdata from '../components/mockdata2';

class onChangeText extends Component {
  constructor(props) {
      super(props);
      this.onChangeText = this.onChangeText.bind(this);
    }

  onChangeText(e){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockdata.filter((item) =>
          item.placeName.toLowerCase().includes(e.toLowerCase()))),
        });
  }
}



class onCancelButtonPress extends Component{

  onCancelButtonPress = () =>
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockdata),
      });
}

module.exports = onChangeText;
module.exports = onCancelButtonPress;
