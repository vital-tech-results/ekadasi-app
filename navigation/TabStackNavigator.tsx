import { RootTabParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TabStack = createNativeStackNavigator<RootTabParamList>();

function TabStackNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </TabStack.Navigator>
  );
}

export default TabStackNavigator;
