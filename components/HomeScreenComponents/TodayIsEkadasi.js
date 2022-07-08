import React from "react";
import { Text } from "../Themed";
import { Button } from "react-native-elements";
import EkadasiOverlay from "./AboutEkadasiTextOverlay";

export default function TodayIsEkadasi({
  breakFastTime,
  buttonStyle,
  containerStyle,
  dayInMonth,
  dayOfWeek,
  ekadasiName,
  isVisible,
  monthName,
  onPress,
  style,
  title,
  titleStyle,
}) {
  return (
    <React.Fragment>
      <Button
        buttonStyle={buttonStyle}
        onPress={onPress}
        containerStyle={containerStyle}
        titleStyle={titleStyle}
        title={title}
      />

      <EkadasiOverlay isVisible={isVisible} onPress={onPress} />

      <Text style={style}>
        {dayOfWeek}, {monthName} {dayInMonth}: {ekadasiName}
      </Text>
      <Text style={{ marginTop: "5%", fontSize: 15 }}>
        Break fast tomorrow between (parana)
      </Text>
      <Text style={{ fontSize: 24 }}>{breakFastTime}</Text>
    </React.Fragment>
  );
}
