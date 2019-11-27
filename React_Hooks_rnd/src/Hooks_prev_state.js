import React,{useState} from 'react';
import { Text, View,Button } from 'react-native';

function Hooks_prev_state (){
    const initcount=0
const [count,setCount]=useState(0)
    return(
    <View>
        <Text>componentName</Text>
        <Button
        title="Thrice Increase"
        onPress={()=>{setCount(count+3)}}
        />
         <Button
        title="Reset"
        onPress={()=>{setCount(initcount)}}
        />
         <Button
        title="Decrease Thrice"
        onPress={()=>{setCount(count-3)}}
        />

{/* //Correct way is using the pevious state */}
<Button
        title="Correct way + 3"
        onPress={()=>{setCount(prev=>prev+3)}}
        />

<Text>{count}</Text>
    </View>
);
}

export default Hooks_prev_state;
