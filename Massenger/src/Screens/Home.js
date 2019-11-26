import React, { Component } from 'react';
import { View, Text, TextInput, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import styles from "../Constants/css/styles";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Groups from "../Screens/Groups";
import History from "../Screens/History";
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import ChatPage from './ChatPage';
//import { TouchableOpacity } from 'react-native-gesture-handler';
Ionicons.loadFont()
//import reducer from '../Reducer/index'
const screenHeight = Dimensions.get('window').height
const screenwidth = Dimensions.get('window').width
class Home extends Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{
                        flexDirection: "row", padding: 20,
                        width: screenwidth / 1.1,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                style={styles.profilepic}
                                source={require('../Images/women4.jpg')}
                            />
                            <Text style={{ fontSize: 30 }}> Chats </Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                style={styles.photo}
                                source={require('../Images/camera.png')}
                            />

                            <Image
                                style={styles.edit}
                                source={require('../Images/edit.png')}
                            />
                        </View>
                    </View>
                    <View
                        style={{ alignItems: 'center', }}
                    >
                        <TextInput
                            placeholder="Enter the Search"
                            style={styles.input}
                        />
                    </View>
                    {/* //Horizontal Flatlist */}

                </View>
                <View style={styles.horizon_Flat}>
                    <FlatList
                        data={this.props.recent_Chats}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (<View style={{ paddingLeft: 20, paddingBottom: 10, }}>
                                <Image
                                    style={styles.profilepic}
                                    source={item.pic}
                                />
                                <Text> {item.name}</Text>
                            </View>
                            )
                        }}
                    />
                </View>
                {/* //Chats */}
                <View style={{ alignItems: "center", }}>
                    <FlatList
                        data={this.props.live_Chats}
                        renderItem={({ item }) => {
                            return (
                                //Sending the data to other screen

                                <TouchableOpacity
                                    onPress={() => {
                                       // alert("pressed")
                                        this.props.navigation.navigate('Chat', {
                                            itempc: item.pic,
                                            name: item.name,
                                        });
                                    }}
                                >
                                    <View style={{
                                        width: screenwidth / 1.1,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "lightgrey",
                                        margin: screenwidth / 25,
                                        borderRadius: 20
                                    }}>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                            <Image
                                                style={styles.profilepic}
                                                source={item.pic}
                                            />
                                            <View style={{ paddingLeft: 10 }}>
                                                <Text style={{ fontSize: 17, fontWeight: "600" }}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{ paddingLeft: 4, }}>{item.mssg} </Text>
                                            </View>
                                        </View>
                                        <View style={{ paddingRight: 10 }}>
                                            <Image
                                                style={{ height: 10, width: 10, backgroundColor: "blue", borderRadius: 10 }}
                                            /></View>


                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />

                </View>
                {/* <Text> rtyddfgh</Text> */}

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    const { recent_Chats, live_Chats } = state.myreducer
    // console.warn(recent_Chats)
    return {
        recent_Chats, live_Chats
    }

}

const HomeScreen = connect(mapStateToProps)(Home);



// Stack Navigater
const AppNavigator = createStackNavigator(
    { 
       // Chat_nav:TabNavigator,
        Home: HomeScreen,
        Chat: ChatPage,
    },
    {
        initialRouteName: 'Home',
    }
);

//tab navigater
const TabNavigator = createBottomTabNavigator(
    {
        ChatNavigation:AppNavigator,
        Home: HomeScreen,
        Groups: Groups,
        History: History
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home`;
                }
                else if (routeName === 'Groups') {
                    iconName = `ios-people`;
                }
                else if (routeName === 'History') {
                    iconName = `ios-time`;
                }

                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer( TabNavigator);


