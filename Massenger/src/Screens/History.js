import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Constants/css/styles';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.History}>
        <Text> History </Text>
      </View>
    );
  }
}

export default History;
