import React,{useEffect,useState} from 'react';
import { Text, View,Button } from 'react-native';

function Hooks_useEffects(){
    const [count11,setCount]=useState(0)
    const [nirvana,setNirvana]=useState(false)
 useEffect(()=>{
console.warn("Nirvana achieved")
},[nirvana])//when the niravana changes only then update the component


    //UseEffect acn be called multiple times than the componentDidMount 
    useEffect(()=>{
       // document.title("u clicked ",{count}," times")
console.warn("I am born and actong like the componentDidMount()")
    },[])//[] means called once act like componentDidMount


    //acts like componentDidUpdate()
    useEffect(()=>{
        // document.title("u clicked ",{count}," times")
 console.warn("I am born and actong like the componentDidUpdate()")
 if(count11>5)
 {
     setNirvana(true)
 }
     },)

 
    return (
        <View>
            <Text>
              Hooks Use Effects
                </Text>
                <Button
                title="Use Effects"
                onPress={()=>setCount(count11+1 )}
                />
                <Text>{count11} </Text>
            </View>
    )
}

export default Hooks_useEffects;