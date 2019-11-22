import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from "react-redux";

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    render() {
        return (
            <View style={{ paddingTop: 40, backgroundColor: '#f98f', }}>
                <Text> CounterApp </Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        placeholder="Enter the task"
                        onChangeText={(txt) => { this.setState({ input: txt }) }}

                        style={{ width: 200, height: 50, backgroundColor: "white" }}
                    />
                    <Button
                        title="Add Task"
                        onPress={() => this.props.addTask(this.state.input)}
                    />
                </View>
                <Button
                    title="increase"
                    onPress={() => this.props.increaseCounter()}

                />
                <Text> {this.props.counter}</Text>
               <Text> {this.props.input}</Text>
                <Button
                    title="Decrease"
                    onPress={() => this.props.decreaseCounter()}
                />
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter,
        input:state.input,
        tasks: state.tasks

    }
}
function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        addTask: () => dispatch({ type: 'ADD_TASK',data:this.props.input })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
