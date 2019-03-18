import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Info"
          color="#fff"
        />
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> HomeScreen </Text>
        <Button
          title="GoToDetails"
          onPress={() => {
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
              title: "this is title"
            });
          }}
        />
      </View>
    );
  }
}
class DetailsScreen extends Component {
  // static navigationOptions = {
  //   title: "Details"
  // };
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam("title"),
      // 6.overriding shared navigationOptions
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ title: "title is Updated!" })
          }
        />
      </View>
    );
  }
}
//  Replacing the title with a custom component
class LogoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        {/* <Image
          source={require("./assets/images/avatar.png")}
          style={{ width: 30, height: 30 }}
        /> */}
      </View>
    );
  }
}
class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  // 第二个参数
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
// 嵌套路由
const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
