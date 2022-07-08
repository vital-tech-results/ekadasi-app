import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import { TailwindProvider } from "nativewind";

import NotificationHandler from "./hooks/useNotificationHandler";

import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

// import schedulePushNotification from "./components/Notifications/ScheduleNotifications";
// import schedulePushNotificationAndroid from "./components/Notifications/ScheduleNotificationsAndroid";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
  handleSuccess: async () => {
    // console.log("setnotificationHandeler in HomeScreen is success");
  },
  handleError: async () => {
    // console.log("error in handler ");
  },
});

// see if device is android or ios
// if ios run this notification otherwise run this notif....
// Device.osName === "iOS"
//   ? schedulePushNotification()
//   : schedulePushNotificationAndroid();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  NotificationHandler();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <TailwindProvider>
        <SafeAreaProvider>
          <SelectProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SelectProvider>
        </SafeAreaProvider>
      </TailwindProvider>
    );
  }
}
