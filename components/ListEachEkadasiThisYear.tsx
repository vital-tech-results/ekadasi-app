import React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

interface ListItemProps {
  dayOfWeek: string;
  monthName: string;
  dayInMonth: string;
  onPress?: any;
}

export default function ListEachEkadasiThisYear({
  dayOfWeek,
  monthName,
  dayInMonth,
  onPress,
}: ListItemProps) {
  return (
    <Pressable disabled={false} onPress={onPress}>
      <View className="bg-[#F8D36E] mt-3 mb-3 border-2 border-[#F8BE6E] rounded-xl">
        <Text
          className="text-base text-center leading-10 font-semibold"
          lightColor="#123b7a"
          darkColor="#2a2e36"
        >
          {dayOfWeek}, {monthName} {dayInMonth}
        </Text>
      </View>
    </Pressable>
  );
}
