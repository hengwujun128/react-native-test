import React, { Component } from "react";
import { View, Text } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  // 第二个参数
  {
    initialRouteName: "Details"
  }
);
export default createAppContainer(AppNavigator);
