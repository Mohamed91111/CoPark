import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, OptionsStackNavigator, InfoStackNavigator } from "./StackNavigator";

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
        } else if (route.name === 'Options'){
          iconName = focused ? 'options' : 'options-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size}  color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#f59300',
      inactiveTintColor: '#212121',
      activeBackgroundColor: '#212121',
           style: {
                 backgroundColor: '#f59300',
           }
    }}
    
    >
      <Tab.Screen name="HomeMap" component={MainStackNavigator} />
      <Tab.Screen name="InfoApp" component={InfoStackNavigator} />
      <Tab.Screen name="Options" component={OptionsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;