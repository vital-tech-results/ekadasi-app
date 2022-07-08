import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function usePressable({ navigateProp }) {
  const colorScheme = useColorScheme();

  return (
    <React.Fragment>
      <Pressable
        onPress={navigateProp}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <FontAwesome
          name="info-circle"
          size={25}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
      </Pressable>
    </React.Fragment>
  );
}
