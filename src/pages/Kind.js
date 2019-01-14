import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Kind extends Component{
    static navigationOptions = {
        title: '分类',
        tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/images/kinds.png')
              : require('../assets/images/kind.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        }
    }
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text>分类</Text>
            </View>
        )
    }
}