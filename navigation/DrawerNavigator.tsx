// need to use this tutorial https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da#drawer-navigator

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import getHeaderTitle from "../hooks/useGetHeaderTitle"; // dynamically set title of screen

import TabStackNavigator from "./TabStackNavigator";
import ContactStackNavigator from "./ContactNavigator";
import RoadMap from "../screens/RoadMap";
import usePressable from "../hooks/usePressable";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <React.Fragment>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerTintColor: Colors[colorScheme].text,
          headerTitle: "May All Be Blessed",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("UnityInDiversity")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={TabStackNavigator} />
        <Drawer.Screen
          name="Contact"
          component={ContactStackNavigator}
          options={({ route }) => ({
            //this dynamically sets screen title
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Drawer.Screen
          name="Road Map"
          component={RoadMap}
          options={({ route }) => ({
            //this dynamically sets screen title
            headerTitle: getHeaderTitle(route),
          })}
        />
      </Drawer.Navigator>
      <StatusBar />
    </React.Fragment>
  );
};

export default DrawerNavigator;
