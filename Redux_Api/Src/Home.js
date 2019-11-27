import React, { Component } from 'react';
import { View, Text, FlatList, Image,Button, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import axios from "axios";

import { apiData,toggleMenu,selectItem  } from "../Src/Action/Index";

class Home extends Component {

// get the  api data on the button press

apiData1(){
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
                <Button
                title="get data"
                onPress={()=>this.apiData1()}
                />
{/* // making the manual drop Down menu */}
<View style={{backgroundColor:"#f89f",alignItems:"center",margin:2}}> 
   < TouchableOpacity
   onPress={()=>this.props.toggleMenu()}>
        <Text>Select Your Language </Text>
        </ TouchableOpacity>
        </View>
{ this.props.istoggle ?
<View>
    <FlatList
    scrollEnabled='none'
    data={this.props.listt}
    renderItem={({item})=>{
    return (
        <View style={{backgroundColor:"#f89f",alignItems:"center",margin:2}}>
            <TouchableOpacity
            onPress={()=>this.props.selectItem(item)}
            >
            <Text>{item.id} </Text>
            <Text>{item.name} </Text>
            </TouchableOpacity>
            </View>
    )
    }}
    />
    </View> : null
    }
{/* //Showing the data of selected listt */}

    <Text> {this.props.selectedData}</Text>

        {/* <Text> {this.props.data.toString()}</Text> */}
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => {
                        return (
                            <View style={{
                                backgroundColor:"pink",
                                alignItems:"center",
                                margin:10,
                                borderRadius:20
                                }}>
                                {/* <Text>{item.userId} </Text> */}
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
    const { data,istoggle,selectedData ,listt } = state.apiReducer
    return {  data,istoggle,selectedData,listt }
}

const mapDispatchToProps = (dispatch) => ({
    // apiData: (res) => dispatch(apiData(res))
    apiData:(res)=>dispatch(apiData(res)),
    toggleMenu:()=>dispatch(toggleMenu()),
    selectItem:(item)=>dispatch(selectItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
