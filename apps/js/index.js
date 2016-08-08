/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';

var homepage = require('./homepage');
var search = require('./search');
var review = require('./review');
var favorite = require('./favorite');
var profile = require('./profile');

import Icon from 'react-native-vector-icons/Ionicons';


var index = React.createClass({

  getInitialState: function() {
   return {
     accessToken: this.props.accessToken,
     selectedTab: 'search'
   }
  },

  render: function() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Homepage"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'homepage'}
          onPress={() => {
            this.setState({
              selectedTab: 'homepage',
            });
          }}>
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title : 'Homepage',
                component: homepage,
                passProps: {
                accessToken: this.state.accessToken,
                  }
                }}
            />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Search"
          iconName="ios-search-outline"
          selectedIconName="ios-search"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
                this.setState({
                  selectedTab: 'search',
                });
            }}>
              <NavigatorIOS
                style={styles.container}
                initialRoute={{
                  title : 'Search',
                  component: search,
                  passProps: {
                  accessToken: this.state.accessToken,
                    }
                  }}
                      />

        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }

});


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFD',
    flex: 1,
    flexDirection: 'column'
  }
})



module.exports = index;
