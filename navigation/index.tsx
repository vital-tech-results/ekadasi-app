/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import { RootStackParamList } from "../types";

import NotFoundScreen from "../screens/NotFoundScreen";
import UnityInDiversity from "../screens/UnityInDiversity";
import LinkingConfiguration from "./LinkingConfiguration";
import DrawerNavigator from "./DrawerNavigator";
import TabStackNavigator from "./TabStackNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BottomTabs" component={TabStackNavigator} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="UnityInDiversity"
          component={UnityInDiversity}
          options={{ title: "Unity In Diversity" }}
        />
      </Stack.Group>
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
