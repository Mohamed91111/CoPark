import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator, InfoStackNavigator } from "./StackNavigator";

import Icon from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeMap') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'InfoApp'){
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        } else if (route.name === 'Contact'){
          iconName = focused ? 'at-circle' : 'at-circle-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size}  color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="HomeMap" component={MainStackNavigator} />
      <Tab.Screen name="InfoApp" component={InfoStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;