import React, { Component } from 'react';
import { View, Text,FlatList, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux'
import { checkedItems } from "../Action/index";

class CheckBoxComp extends Component {

  render() {
      console.warn("Render");
    return (
      <View style={{backgroundColor:"pink",height:170}}>
<FlatList
data={this.props.preference}
renderItem={({item})=>{
    return (
        <View style={{margin: 10,flexDirection:"row",}}>
            <Text>{item.id} </Text>
            <TouchableOpacity
            onPress={() => {this.props.checkedItems(item)}} >
                { item.ismarked ?
                <Image style={{height:20,width:20,backgroundColor:"red"}}/> :
                <Image style={{height:20,width:20,backgroundColor:"black"}}/>
                }
                </TouchableOpacity>
            </View>
    )
}}
 />
        <Text> CheckBoxComp </Text>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
    
    const { preference } = state.countereducer
    console.warn(preference);
    return {preference }
}
const mapDispatchToProps=dispatch=>({
    checkedItems:(item)=>{dispatch(checkedItems(item))}
})
export default  connect (mapStateToProps,mapDispatchToProps)(CheckBoxComp);
