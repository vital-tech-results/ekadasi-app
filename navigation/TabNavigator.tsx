import React from "react";
import { RootTabParamList, RootTabScreenProps } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "react-native-reanimated";

import HomeScreen from "../screens/HomeScreen";
import PureBhaktiScreen from "../screens/PureBhakti";

import Colors from "../constants/Colors";

import TabBarIcon from "./TabBarIcon";

import useColorScheme from "../hooks/useColorScheme";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator<RootTabParamList>();

function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerStyle: {
          backgroundColor: "rgba(0,0,0,0.05)",
        },
        headerTintColor: "#242c40",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({}: RootTabScreenProps<"Home">) => ({
          headerTitle: "May All Be Blessed",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        })}
      />
      <Tab.Screen
        name="PureBhakti"
        component={PureBhaktiScreen}
        options={({}: RootTabScreenProps<"PureBhakti">) => ({
          title: "Pure Bhakti",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="flag" color={color} />,
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
