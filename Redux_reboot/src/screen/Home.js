import React, { Component } from 'react';
import {
    View, Text,
    Button, TextInput,
    Image,
    FlatList,ScrollView,
    TouchableOpacity, Picker
} from 'react-native';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter, updateInputVal, addTask, radioButton, pickerSelect } from '../Action/index';
import CheckBoxComp from '../Components/CheckBoxComp';
import RadioButtonComp from '../Components/RadioButtonComp';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //  language:'jaava'
        };
    };


    render() {
        return (
           
            <View style={{ paddingTop:60,alignItems:"center" ,paddingBottom: 60,}}>
                <Text> {this.props.counter} </Text>
                <Button
                    title="Increment Counter"
                    onPress={this.props.incrementCounter}
                />
                <Button
                    title="Decrement Counter"
                    onPress={this.props.decrementCounter}
                />
                <TextInput
                    style={{ backgroundColor: "pink", width: 200, height: 40, borderRadius: 20 }}
                    placeholder="Enter First Name"
                    onChangeText={(val) => this.props.updateInputVal('name', val)}
                />

                <TextInput
                    style={{ backgroundColor: "pink", width: 200, height: 40, borderRadius: 20, marginTop: 10 }}
                    placeholder="Enter Last Name"
                    onChangeText={(val) => this.props.updateInputVal('lastName', val)}
                />

                <TextInput
                    style={{ backgroundColor: "pink", width: 200, height: 40, borderRadius: 20, marginTop: 10 }}
                    placeholder="Enter Email"
                    onChangeText={(val) => this.props.updateInputVal('email', val)}
                />

                {/* //making the radio button */}
                {/* //   {this.props.ischecked ? */}
                <Button
                    title="Add Task"
                    onPress={this.props.addTask}
                />

                <View style={{ alignItems: "center" }}>
                    <Text>Choose A language... </Text>
                    <View style={{backgroundColor:"green"}}>
                    <Picker
                        selectedValue={this.props.language}
                        style={{
                            height: 10, width: 140,
                           marginBottom:180
                        }}
                        onValueChange={(itemValue, itemIndex) => this.props.pickerSelect(itemValue)}  >
                        <Picker.Item label="Java" value="Java" />
                        <Picker.Item label="JavaScript" value="Javascript" />
                        <Picker.Item label="C" value="C" />
                        <Picker.Item label="Node" value="Node" />
                        <Picker.Item label="Swift" value="Swift" />
                        <Picker.Item label="React" value="React" />
                        <Picker.Item label="Angular" value="Angular" />
                    </Picker>
                    </View>

                    <CheckBoxComp />
                    {/* flatlist goes here */}
                    <RadioButtonComp />

                    
                    <FlatList
                    data={this.props.tasks}
                    renderItem={({item})=>{
                        return (
                            <View style={{backgroundColor:"#f99f",margin:10}}>
                            <Text>{item.name}</Text>
                            <Text> {item.lastName}</Text>
                            <Text> {item.email}</Text>
                            <Text> {item.language}</Text>
                            </View>
                        )
                    }}
                    />

                </View>
            </View> 
        );
    }
}
const mapStateToProps = (state) => {
    
    const { counter, tasks, name, lastName, email, ischecked, language } = state.countereducer
    return { counter, tasks, name, lastName, email, ischecked, language }

}

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => { dispatch(incrementCounter()) },
    decrementCounter: () => { dispatch(decrementCounter()) },
    updateInputVal: (key, value) => { dispatch(updateInputVal(key, value)) },
    addTask: () => { dispatch(addTask()) },
    radioButton: () => { dispatch(radioButton()) },
    pickerSelect: (item) => { dispatch(pickerSelect(item)) }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);