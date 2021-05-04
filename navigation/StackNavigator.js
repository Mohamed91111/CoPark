import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMap from "../screens/HomeMap";
import ParkingInfo from "../screens/ParkingInfo";
import InfoApp from "../screens/InfoApp";
import Setting from "../screens/Setting";
import AppMap from "../components/MapView";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
<<<<<<< HEAD
    backgroundColor: "#C9536A",
=======
    backgroundColor: "#f59300",
>>>>>>> 3a600911ddeafeed40fa135b9fa73b138ee6e288
  },
  headerTintColor: "#212121",
  headerBackTitle: "Back",
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeMap" component={AppMap} />
      <Stack.Screen name="ParkingInfo" component={ParkingInfo} />
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

export { SettingStackNavigator,MainStackNavigator,  InfoStackNavigator };
