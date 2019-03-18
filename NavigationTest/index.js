/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import HelloReactNavigation from "./helloReactNavigation";

import MovingBetweenScreens from "./MovingBetweenScreens";

import screenModal from "./screenModal";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => screenModal);
