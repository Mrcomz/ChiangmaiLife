'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

import mockdata from '../components/mockdata2';
import SearchBar from 'react-native-search-bar';
//var onChangeText = require('../components/test');
import onCancelButtonPress from '../components/test';



class search extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false
    }
    this.onChangeText = this.onChangeText.bind(this);
  }

  render() {
    if (!this.state.loaded) {
        return this.renderLoadingView();
    }

     return (
       <View>
         <SearchBar
           style={styles.searchBar}
           placeholder='Search'
           onChangeText={this.onChangeText}
           onCancelButtonPress={this.onCancelButtonPress}
           />
         <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderData}
         style={styles.listView}
         automaticallyAdjustContentInsets={false}
         />
       </View>
     );
  }

    componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockdata),
          loaded: true
      });
  }

  onChangeText(e){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockdata.filter((item) =>
          item.placeName.toLowerCase().includes(e.toLowerCase()))),
        });
  }

  renderLoadingView() {
       return (
           <View style={styles.container}>
               <Text>
                   Loading list...
               </Text>
           </View>
       );
   }

  renderData(data){
    return (
    <View style={styles.container}>
      <Image source={{uri: data.image}}
        style={styles.thumbnail}
        />
      <View style={styles.rightContainer}>
        <Text style={styles.song}>{data.placeName}</Text>
        <Text style={styles.album}>{data.detail}</Text>
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
    marginLeft: 5,
  },
  album: {
    fontSize: 10,
    marginBottom: 8,
    marginLeft: 5
  },
  song: {
    fontSize: 13,
    marginLeft: 5
  },
  thumbnail: {
    width: 60,
    height: 60,
  },
  separator: {
    flex: 0.05,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  listView: {
  paddingTop: 20,
  backgroundColor: '#F5FCFF',
  },
  searchBar: {
    marginTop: 64,
    height: 44,
    padding: 2,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
});

module.exports = search;
