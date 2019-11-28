import React, { Component } from 'react';
import { View, Text ,ScrollView,Image,Animated,} from 'react-native';


header_max_height=400
header_min_height=70
profile_image_max_height=80
profile_image_min_height=40


class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY:new Animated.Value(0)
    };
  }

  render() {
   // debugger
    const headerHeight=this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height],
      outputRange:[header_max_height,header_min_height],
      extrapolate:'clamp'
    });
    const changeColor = this.state.scrollY.interpolate({
      inputRange:[0,100,200,300,400],
      outputRange:['red','green','black','orange','purple'],
      extrapolate:'clamp'
    });
    const rotateImage=this.state.scrollY.interpolate({
      inputRange:[0,100,200,300,400],
      outputRange:['0deg','90deg','180deg','270deg','360deg'],
      extrapolate:'clamp'
    });
    return (
      <View style={{flex:1}} >

        <Animated.View style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,
          backgroundColor:"lightskyblue",
          height:headerHeight,
          backgroundColor:changeColor
        }}>
          </Animated.View>

          <ScrollView style={{flex:1}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent:{contentOffset:{y:this.state.scrollY}}}]
          )}
          >
            < Animated.View style={{
              height:profile_image_max_height,
              width:profile_image_max_height,
              borderRadius:profile_image_max_height/2,
              borderColor:"white",
              borderWidth:4,
              overflow:"hidden",
              transform: [{rotateY : rotateImage}],
              marginTop:header_max_height-(profile_image_max_height/2),
                marginLeft:10
              }}>
              <Image
              style={{flex:1,width:null,height:null}}
              source={require('../Images/women2.jpg')}
              />
             
               </Animated.View>
               <Text style={{fontSize:30}}> RAMAN VERMA</Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text style={{fontSize:30}}> RAMAN VERMA</Text>
               <Text style={{fontSize:30}}> RAMAN VERMA</Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text>   </Text>
               <Text style={{fontSize:30}}> RAMAN VERMA</Text>

            </ScrollView>
      <Text> >hgfdhg</Text>
      </View>
    );
  }
}

export default History;
