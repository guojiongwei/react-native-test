import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './../pages/Home';
import Kind from './../pages/Kind';
import Cart from './../pages/Cart';
import User from './../pages/User';

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Kind,
    Cart,
    User
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#F22B1E',
    }
  }
)
export default createAppContainer(TabNavigator)