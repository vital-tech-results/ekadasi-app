import React from "react";
import { RootTabParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConstactScreen from "../screens/ContactScreen";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Stack = createNativeStackNavigator<RootTabParamList>();

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactScreen"
        component={ConstactScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
