import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// social login route
import Login from "../component/Login/";

// traditional login route
import SignIn from "../component/SignIn";
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="hidden">
        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="Home" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
