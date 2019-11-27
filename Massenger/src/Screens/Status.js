import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Button, ProgressViewIOS } from 'react-native';

sw = Dimensions.get('window').width
sh = Dimensions.get('window').height
class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Progress_Value: 0.00
        };
    };

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.Start_Progress()
    }

    Start_Progress = () => {
        this.value = setInterval(() => {
            if (this.state.Progress_Value <= 1)
             {
                this.setState({ Progress_Value: this.state.Progress_Value + .02 })
            }
            else if(this.state.Progress_Value == 1.0000000000000004  ){
                this.Stop_Progress()
               // clearInterval(this.value);
            }
          
        }, 100);
       
        
    }

    Stop_Progress = () => {
       // alert('called')
        clearInterval(this.value);
        this.props.navigation.navigate('Home')
    }

    Clear_Progress = () => {
        this.setState({ Progress_Value: 0.0 })
    }

    render() {
        const { navigation } = this.props

        return (
            <View>
                <View style={{
                    width: sw / 1,
                    paddingTop: sw / 8,
                    //  paddingLeft:sw/80,
                    backgroundColor: "lightgrey",
                    //justifyContent:"center",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                  
                    <Image
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                          //  backgroundColor: "red",
                            marginRight: sw / 15
                        }}
                        source={uri=navigation.getParam('item_pic')}
                    />
                    <Text style={{ fontSize: 20 }}> {navigation.getParam('item_name')} </Text>
                </View>

                <ProgressViewIOS
                progressViewStyle='bar'
                 progress={this.state.Progress_Value} />
                 <Image
                 style={{height:sh/1.2,width:sw/1}}

                 source={uri=navigation.getParam('item_pic')}
                 />
            </View>
        );
    }
}

export default Status;
