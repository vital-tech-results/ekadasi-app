import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

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
