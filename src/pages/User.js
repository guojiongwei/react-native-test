import React, { Component } from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';
import { NavigationActions } from 'react-navigation'

import List from './List'
export default class User extends Component{
    static navigationOptions = {
        title: '我的',
        tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require('../assets/images/users.png')
              : require('../assets/images/user.png');
            return <Image source={icon} style={{ height: 22, width: 22 }} />;
        }
    };
    constructor(props) {
        super(props)
    }
    toList() {
    }
    render() {
        return(
            <View>
                <Text>我的</Text>
                <Button onPress={() => this.props.navigation.push('List')} title='点击' />
            </View>
        )
    }
}