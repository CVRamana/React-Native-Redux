import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
//import FlatListComp from "./Components/FlatListComp";
import { connect } from "react-redux";
import axios from "axios";

import { apiData  } from "../Src/Action/Index";

class Home extends Component {

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                console.log(res.data)
                this.props.apiData(res.data)   
            })
    
    }

    render() {
        return (
            <View style={{
               paddingTop:50
                }} >

                <Text> Home </Text>

        {/* <Text> {this.props.data.toString()}</Text> */}
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                        
                                backgroundColor:"pink",
                                alignItems:"center",
                                margin:10
                               
                                }}>
                                <Text>{item.userId} </Text>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.completed}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { loading, data, err } = state.apiReducer
    return { loading, data, err }
}

const mapDispatchToProps = (dispatch) => ({
    // apiData: (res) => dispatch(apiData(res))
    apiData:(res)=>dispatch(apiData(res))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
