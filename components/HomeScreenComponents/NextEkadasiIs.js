import React from "react";
import { Text } from "../Themed";

export default function NextEkadasiIs({
  style,
  dayOfWeek,
  monthName,
  dayInMonth,
  ekadasiName,
}) {
  return (
    <Text className={style} lightColor="#123b7a" darkColor="#2a2e36">
      {dayOfWeek}, {monthName} {dayInMonth}: {ekadasiName}
    </Text>
  );
}
