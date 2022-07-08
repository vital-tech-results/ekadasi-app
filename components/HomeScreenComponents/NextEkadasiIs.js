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
    <Text style={style}>
      {dayOfWeek}, {monthName} {dayInMonth}: {ekadasiName}
    </Text>
  );
}
