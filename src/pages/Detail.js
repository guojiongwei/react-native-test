import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
export default class Detail extends Component{
    static navigationOptions = {
        title: '详情页'
    }
    constructor(props) {
        super(props)
    }
    toHome() {
        // this.props.navigation.push('TabView')
//     const resetAction = StackActions.reset({
//         index: 0,
//         actions: [NavigationActions.navigate({ routeName: 'Home' })],
//     });
// this.props.navigation.dispatch(resetAction);
this.props.navigation.navigate('Cart')
    }
    render() {
        return(
            <View>
                <Text>list</Text>
                <Button onPress={this.toHome.bind(this)} title='返回购物车' />
            </View>
        )
    }
}