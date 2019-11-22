import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";

class FlatListComp extends Component {
 
  render() {
    return (
      <View>
     
      </View>
    );
  }
}
const mapStateToProps=(state)=>{
const {loading,data,err}=state.apiReducer
return {loading,data,err}
}



export default connect (mapStateToProps,)(FlatListComp);
