import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Constants/css/styles';


class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.Groups}>
        <Text> Groups </Text>
      </View>
    );
  }
}


export default Groups;

