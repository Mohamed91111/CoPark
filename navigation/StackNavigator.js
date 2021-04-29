import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMap from "../screens/HomeMap";
import ParkingInfo from "../screens/ParkingInfo";
import InfoApp from "../screens/InfoApp";
import Options from "../screens/Options";
import AppMap from "../components/MapView";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#f59300",
  },
  headerTintColor: "#212121",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeMap" component={AppMap} />
      <Stack.Screen name="ParkingInfo" component={ParkingInfo} />
    </Stack.Navigator>
  );
};

const OptionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

const InfoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="InfoApp" component={InfoApp} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, OptionsStackNavigator, InfoStackNavigator };
