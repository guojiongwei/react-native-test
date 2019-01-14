import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
export default class List extends Component{
    static navigationOptions = {
        title: '列表'
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
// this.props.navigation.navigate('Kind')
this.props.navigation.push('Detail')
    }
    render() {
        return(
            <View>
                <Text>Detail</Text>
                <Button onPress={this.toHome.bind(this)} title='返回首页' />
            </View>
        )
    }
}