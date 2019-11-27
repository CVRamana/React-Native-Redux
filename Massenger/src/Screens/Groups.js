import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView } from 'react-native';
import styles from '../Constants/css/styles';
sw=Dimensions.get('window').width
sh=Dimensions.get('window').height

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View style={styles.Groups}>
        <View style={styles.g_child}>
         
          </View>
      
      </View>
    );
  }
}


export default Groups;

