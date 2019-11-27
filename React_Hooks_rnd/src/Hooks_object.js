import React,{useState} from 'react';
import { Text, View,TextInput } from 'react-native';

function Hooks_object(){
    const [name,setName]=useState({firstName:"",lastName:""})
    return(
        <View>
           <TextInput
           style={{height:30,width:300,
            backgroundColor:"grey"}}
            onChangeText={(e)=>{setName({...name,firstName:e})}}
            value={name.firstName}

           />
           <Text>{name.firstName} </Text>
            <TextInput
           style={{height:30,width:300,
            backgroundColor:"grey"}}
            onChangeText={(e)=>{setName({...name,lastName:e})}}
            value={name.lastName}

           />
            <Text>Lastname </Text>
            </View>
    )
}

export default Hooks_object;
