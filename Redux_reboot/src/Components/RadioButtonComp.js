import React, { Component } from 'react';
import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import { radioButton } from "../Action/index";
//import { dispatch } from 'rxjs/internal/observable/pairs';

class RadioButtonComp extends Component {
 
  render() {
    return (
      <View>
        <Text> RadioButtonComp </Text>
        <FlatList
        data={this.props.gender} 
        renderItem={({item})=>{
            return (
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                        onPress={() => {this.props.radioButton(item)}} >
                        {this.props.ischecked ?
                            <Image source={require('../../Images/uncheck.png')}
                                style={{ height: 20, width: 20, margin: 10, }}/> :
                                 <Image source={require('../../Images/check.png')}
                                style={{ height: 20, width: 20, margin: 10, }}
                            />}
                    </TouchableOpacity>
                        <Text style={{ margin: 10, }}>{item.id}</Text>
                    </View>
            )
        }}
        />
      </View>
    );
  }
}
const mapStateToProps=(state)=>{
const {gender}=state.countereducer
console.warn(gender)
return {gender}
}
mapDispatchToProps=(dispatch)=>({
    radioButton:(obj1)=>{dispatch(radioButton(obj1))}
})

export default connect (mapStateToProps,mapDispatchToProps)
(RadioButtonComp);
