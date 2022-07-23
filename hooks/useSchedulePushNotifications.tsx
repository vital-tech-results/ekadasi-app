import * as Notifications from "expo-notifications";

interface SchedulePushNotificationProps {
  ekadasiName: string;
  dayInMonth: number;
  monthId: number;
}

export default async function schedulePushNotification({
  ekadasiName,
  dayInMonth,
  monthId,
}: SchedulePushNotificationProps) {
  Notifications.cancelAllScheduledNotificationsAsync();
  const body = `Today is ${ekadasiName} Ekadasi.`;
  await Notifications.scheduleNotificationAsync({
    content: {
      badge: 1,
      sound: true,
      title: "Hare Krsna! Friendly reminder:",
      body: body,
    },
    trigger: { repeats: false, month: monthId, day: dayInMonth, second: 5 },
  });
}
