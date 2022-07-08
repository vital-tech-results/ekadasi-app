import React, { useState } from "react";

import RenderNextEkadasiIsConditionally from "./RenderNextEkadasiIsConditionally";
import TodayIsEkadasi from "./TodayIsEkadasi";
import useIsEkadasiBoolean from "../../hooks/useIsEkadasiBoolean";
import Dates from "../../constants/Dates";
import schedulePushNotification from "../../hooks/useSchedulePushNotifications";

const { DAYOFMONTH, DAYOFWEEK, LISTOFDAYS, MONTH } = Dates;
const weekday = LISTOFDAYS[DAYOFWEEK];

export default function DisplayNextEkadasi() {
  const [visible, setVisible] = useState(false);
  const getEkadasiObject = useIsEkadasiBoolean();
  const todayTrue = getEkadasiObject[0];

  if (todayTrue) {
    schedulePushNotification(
      todayTrue.ekadasiName,
      Number(todayTrue.dayInMonth),
      Number(todayTrue.monthId)
    );
    return (
      <TodayIsEkadasi
        key={todayTrue.dayInMonth}
        title={"Today is Ekadasi"}
        isVisible={visible}
        onPress={() => setVisible(!visible)}
        dayOfWeek={todayTrue.dayOfWeek}
        monthName={todayTrue.monthName}
        dayInMonth={todayTrue.dayInMonth}
        ekadasiName={todayTrue.ekadasiName}
        breakFastTime={todayTrue.breakFastTime}
        titleStyle={{ color: "white", fontSize: 30, marginBottom: 10 }}
        containerStyle={{ marginBottom: 20 }}
        buttonStyle={{ backgroundColor: "#15c240" }}
        style={{ fontSize: 25 }}
      />
    );
  } else {
    return (
      <RenderNextEkadasiIsConditionally
        month={MONTH}
        dayOfMonth={DAYOFMONTH}
        weekday={weekday}
      />
    );
  }
}
