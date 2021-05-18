import "react-native-gesture-handler";
import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "./src/Authentication/Onboarding";

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
