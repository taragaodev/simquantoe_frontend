import { Feather, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from '../screens/Home/HomeScreen';
import ListScreen from '../screens/ListProducts/ListScreen';
import { pallete } from '../theme';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  let colorActive = "#fff"
  let colorInactive = pallete[3].bgColor(.5);  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: pallete[7].bgColor(1),          
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{          
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color={colorActive} size={size} />;
            }
            return <Ionicons name="home" color={colorInactive} size={size} />;
          },
        }}        
      />
      <Tab.Screen
        name="Produtos"
        component={ListScreen}
        options={{
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Feather name="list" color={colorActive} size={size} />;
            }
            return <Feather name="list" color={colorInactive} size={size} />;
          },
          tabBarLabelStyle: {
            color: colorActive,            
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
