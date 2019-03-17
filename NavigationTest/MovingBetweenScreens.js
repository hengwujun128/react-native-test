import React, { Component } from "react";
import { View, Text, Button } from "react-native";

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
        <Button
          title="GoToDetails"
          onPress={() => {
            this.props.navigation.navigate("Details");
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
