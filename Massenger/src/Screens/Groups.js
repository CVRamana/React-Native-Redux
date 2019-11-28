import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, TextInput, Animated,Easing } from 'react-native';
//import styles from '../Constants/css/styles';
sw = Dimensions.get('window').width
sh = Dimensions.get('window').height

class Groups extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
  
  }
  componentDidMount() {
    this.animate()
  }
  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  setDataToFirebase = () => {
  }


  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 400]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [10, 32, 10]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    return (
      <View style={styles.Groups}>
       
        <View style={styles.container}>
          <Animated.View
            style={{
              marginLeft,
              height: 30,
              width: 40,
              backgroundColor: 'red'
            }} />
          <Animated.View
            style={{
              opacity,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'blue'
            }} />
          <Animated.View
            style={{
              marginLeft: movingMargin,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'orange'
            }} />
          <Animated.Text
            style={{
              fontSize: textSize,
              marginTop: 10,
              height:50,
              width:200,
              color: 'green'
            }} >
           Animated Text!
      </Animated.Text>
          <Animated.View
            style={{
              transform: [{ rotateX }],
              marginTop: 50,
              height: 90,
              width: 40,
              backgroundColor: 'black'
            }}>
            <Text style={{ color: 'white' }}>Hello from TransformX</Text>
          </Animated.View>
        </View>

      </View>
    );
  }
}


export default Groups;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
})