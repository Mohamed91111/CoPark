import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkingInfo from "../screens/ParkingInfo";
import InfoApp from "../screens/InfoApp";
import Setting from "../screens/Setting";
import AppMap from "../components/MapView";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#f7b045",
  },
  headerTintColor: "#212121",
  headerBackTitle: "Tillbaka",
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
      <Stack.Screen name="Karta" component={AppMap} />
      <Stack.Screen name="Parkering" component={ParkingInfo} />
    </Stack.Navigator>
  );
};



const InfoStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Info" component={InfoApp} />
    </Stack.Navigator>
  );
};

export { SettingStackNavigator,MainStackNavigator,  InfoStackNavigator };
