'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import TableView from 'react-native-tableview'
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;

var styles = StyleSheet.create({
  Tableview: {
  paddingTop: 20
  },
  container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  }
});

class homepage extends Component{
  constructor(props) {
        super(props);
        this.state = {sectionLabel: 'Section', cellLabel: 'Cell 1', cells:[<Cell><Text>Cell 3</Text></Cell>]};
    }

    componentDidMount(){
        setTimeout(()=>this.setState({sectionLabel: 'Section #1', cellLabel: 'Cell #1', cells:[<Cell><Text>Cell #3</Text></Cell>,<Cell><Text>Cell #4</Text></Cell>]}));
    }
    render() {
        return (
            <TableView style={{flex:1}} onPress={(event) => alert(JSON.stringify(event))}>
                <Section label={this.state.sectionLabel}>
                    <Cell style={{backgroundColor:'gray'}} value="">
                        <Text style={{color:'white', textAlign:'right'}}>Cell 1</Text>
                        <Text style={{color:'white', textAlign:'left'}}>Cell 1</Text>
                    </Cell>
                    <Cell style={{height:200, backgroundColor:'red'}}><Text>{this.state.cellLabel}</Text></Cell>
                    <Cell style={{height:100}}><Text>Cell 4</Text></Cell>
                    <Cell><Text>Cell 5</Text></Cell>
                </Section>
                <Section label="section 2">
                    <Cell style={{backgroundColor:'gray'}} value="1">
                        <Text style={{color:'white', textAlign:'right'}}>Cell 1.1</Text>
                        <Text style={{color:'white', textAlign:'left'}}>Cell 1.1</Text>
                    </Cell>
                    <Cell style={{height:200, backgroundColor:'red'}}><Text>Cell 1.2</Text></Cell>
                    <Cell><Text>Cell 3</Text></Cell>
                    <Cell style={{height:100}}><Text>Cell 4</Text></Cell>
                    <Cell><Text>Cell 5</Text></Cell>
                </Section>
                <Section label="section 3">
                    {this.state.cells}
                </Section>
            </TableView>
        );
    }
}

module.exports = homepage;
