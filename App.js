import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabView from './src/components/TabView';
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import List from './src/pages/List';
import Detail from './src/pages/Detail';
const RootStack = createStackNavigator(
  {
    List,
    Detail,
    TabView
  },
  {
    initialRouteName: 'TabView',
    mode: 'modal',
    headerMode: 'none',
    transitionConfig:()=>({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
  }
);
const App = createAppContainer(RootStack);
export default App