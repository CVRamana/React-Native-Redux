import { StyleSheet, Dimensions } from "react-native";
const screenHeight=Dimensions.get('window').height
const screenwidth=Dimensions.get('window').width
const styles=StyleSheet.create({
header:{
//backgroundColor:"#f67f",
paddingTop:50,
paddingBottom: 20,

},
input:{
    height:40,
    width: screenwidth/1.1,
    borderRadius:20,
    paddingLeft: 20,

    backgroundColor:"lightgrey"
},
profilepic:{
   height:50,
   width:50,
   borderRadius:25,
   backgroundColor:'grey' 
},
photo:{
    height:30,
    width:30,
    borderRadius:15,
    marginRight:18,
   // backgroundColor:'grey' 
 },
 edit:{
    height:30,
    width:30,
    borderRadius:15,
   // backgroundColor:'grey' 
 },
 horizon_Flat:{
  //   backgroundColor:"grey"
  
 },
 Groups:{
backgroundColor:"yellow",
flex: 1,
 },
 History:{
  backgroundColor:"pink",flex: 1,
 }

})
export default styles