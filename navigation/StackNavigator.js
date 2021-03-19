import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMap from "../screens/HomeMap";
import ParkingInfo from "../screens/ParkingInfo";
import InfoApp from "../screens/InfoApp";
import Contact from "../screens/Contact";
import AppMap from "../components/MapView";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
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

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
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

export { MainStackNavigator, ContactStackNavigator, InfoStackNavigator };
