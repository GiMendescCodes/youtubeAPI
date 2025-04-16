import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import pesquisarY from "./pesquisarY";
import pesquisarV from "./pesquisarV";

const Tab = createBottomTabNavigator();

export default function BoasVindas() {
  return (
    <Tab.Navigator
      initialRouteName="YouTube"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "YouTube") {
            return (
              <Ionicons
                name="logo-youtube"
                size={size}
                color={focused ? "red" : color}
              />
            );
          } else if (route.name === "Vimeo") {
            return (
              <Ionicons
                name="logo-vimeo"
                size={size}
                color={focused ? "#1ab7ea" : color}
              />
            );
          }
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="YouTube" component={pesquisarY} />
      <Tab.Screen name="Vimeo" component={pesquisarV} />
    </Tab.Navigator>
  );
}
