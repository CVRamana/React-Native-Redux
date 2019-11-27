import React,{useState} from 'react';
import { Text, View,Button } from 'react-native';

function HooksArray(){
    const [items,setItem]=useState([])
    addItem=()=>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10 )+1
        }])
    }

    return(
        <View>
            <Text>ARRay </Text>
            <Button
            title="Add Item"
            onPress={addItem}
            />
            {/* <Text>JSON.stringify({items}) </Text> */}
            {items.map((i)=>{
                return(
                    <Text>
                        {JSON.stringify(i)}
                    </Text>
                )
            })}
            </View>

    )
}

export default HooksArray;
