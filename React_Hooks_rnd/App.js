import React, { Component, } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Hooks   from "./src/Hooks";
import Hooks_prev_state from './src/Hooks_prev_state';
import  Hooks_object from "./src/Hooks_object";
import  HooksArray from "./src/HooksArray";
import Hooks_useEffect from "./src/Hooks_useEffect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text> App </Text>
        <Hooks/>
        <Hooks_prev_state/>
        <Hooks_object/>
        <HooksArray/>
        <Hooks_useEffect/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  parent:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  }
  
  })
export default App;
