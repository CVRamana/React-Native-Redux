import React, { Component } from 'react';
import { View, Text ,ScrollView,Image} from 'react-native';
import styles from '../Constants/css/styles';
//import { ScrollView } from 'react-native-gesture-handler';

header_max_height=120
header_min_height=70
profile_image_max_height=80
profile_image_min_height=40


class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}} >
        <View style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,
          backgroundColor:"lightskyblue",
          height:header_max_height
        }}>
          </View>
          <ScrollView style={{flex:1}}>
            <View style={{
              height:profile_image_max_height,
              width:profile_image_max_height,
              borderRadius:profile_image_max_height/2,
              borderColor:"white",
              borderWidth:4,
              overflow:"hidden",
              marginTop:header_max_height-(profile_image_max_height/2),
                marginLeft:10
              }}>
              <Image
              style={{flex:1,width:null,height:null}}
              source={require('../Images/women2.jpg')}
              />
              
               </View>
               <Text> RAMAN VERMA</Text>
            </ScrollView>
      <Text> >hgfdhg</Text>
      </View>
    );
  }
}

export default History;
