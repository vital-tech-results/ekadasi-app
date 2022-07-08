import React from "react";
import * as Notifications from "expo-notifications";

interface SchedulePushNotificationProps {
  ekadasiName: string;
  dayInMonth: number;
  monthId: number;
}

export function Testing() {
  console.log("this is test");
}
export default async function schedulePushNotification({
  ekadasiName,
  dayInMonth,
  monthId,
}: SchedulePushNotificationProps) {
  const body = `Today is ${ekadasiName} Ekadasi.`;
  Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: body,
    },
    trigger: { month: monthId, day: dayInMonth, second: 5 },
  });
}
