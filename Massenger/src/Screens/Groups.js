import React, { Component } from 'react';
import { View, Text,Dimensions,ScrollView,Button,TextInput } from 'react-native';
import styles from '../Constants/css/styles';
sw=Dimensions.get('window').width
sh=Dimensions.get('window').height

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  setDataToFirebase=()=>{

  }
  render() {
    return (
      <View style={styles.Groups}>
        <View style={styles.g_child}>
         <TextInput
         style={{width:300,height:40,backgroundColor: "yellow",}}
         />
         <Button
         title="Send Data"
         onPress={this.setDataToFirebase()}
         />
          </View>
      
      </View>
    );
  }
}


export default Groups;

