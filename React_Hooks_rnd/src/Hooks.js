import React,{useState} from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';
function Hooks(){
    const initState=0
    const [count,setCount]=useState(0)
    return (
		<View >
			<Text>You clicked {count} times.</Text>
			<Button
				onPress={() => setCount(count + 1)}
				title="Click me"
				color="red"
				accessibilityLabel="Click this button to increase count"
			/>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
export default Hooks;
