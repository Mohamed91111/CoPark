import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, SettingStackNavigator, InfoStackNavigator } from "./StackNavigator";

import Icon from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Info'){
          iconName = focused ? 'information-circle' : 'information-circle-outline';
        }/* else if (route.name === 'Setting'){
          iconName = focused ? 'settings' : 'settings-outline';
        }*/

        // You can return any component that you like here!
        return <Icon name={iconName} size={size}  color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#f7b045',
      inactiveTintColor: '#212121',
      activeBackgroundColor: '#212121',
           style: {
                 backgroundColor: '#f7b045',
           }
    }}
    
    >
       
      <Tab.Screen name="Map" component={MainStackNavigator} />
      <Tab.Screen name="Info" component={InfoStackNavigator} />
      
    </Tab.Navigator>
    
  );
};
//<Tab.Screen name="Setting" component={SettingStackNavigator} /> 
export default BottomTabNavigator;