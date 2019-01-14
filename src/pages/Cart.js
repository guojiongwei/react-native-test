import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Cart extends Component{
    static navigationOptions = {
        title: "购物车",
        tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/images/finds.png')
              : require('../assets/images/find.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        }
    }
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View>
                <Text>购物车</Text>
            </View>
        )
    }
}