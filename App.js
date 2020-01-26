import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LoginScreen from  './src/components/login';
import Routes from "./src/routes/routes"

export default class App extends Component {
  render() {
    return(
      <Routes />
    )
  }
}