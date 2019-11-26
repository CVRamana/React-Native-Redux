import React, { Component } from 'react';
import { View, Text, Image,Button, Dimensions } from 'react-native';
//import ConfiguredHeaderComponent from '../Components/ConfiguredHeaderComponent';
const screenHeight = Dimensions.get('window').height
const screenwidth = Dimensions.get('window').width
class ChatPage extends Component {

  static navigationOptions = {
  tabBarVisible:false,
   header:null,

  };
 

  render() {
    const { navigation } = this.props
    return (
      <View style={{
        alignItems: 'center',
        paddingTop: screenHeight / 18,
        //backgroundColor: "lightgrey",
        flex: 1

      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems:"center",
          width: screenwidth / 1,
         backgroundColor: 'lightgrey',
          height: screenHeight / 20
        }}>
          <Button
          title="Back"
          onPress={()=>this.props.navigation.navigate('Home')}
          />

          <Image
style={{height:40,width:40,borderRadius:20,backgroundColor:"red"}}
//source={navigation.getParam('itempc')}
source={uri=navigation.getParam('itempc')}

/>
          <Text>
           {(navigation.getParam('name'))}
          </Text>


          <View style={{flexDirection:"row",
          width:screenwidth/3,
       //   backgroundColor:"grey",
          padding:screenwidth/26,
          justifyContent:"space-between"}}>
         <Image
         style={{height:30,width:30}}
         source={require('../Images/call.png')}
         />
         <Image
          style={{height:30,width:30}}
         source={require('../Images/video.png')}
         />
          </View>

        </View>
      </View>
    );
  }
}

export default ChatPage;
