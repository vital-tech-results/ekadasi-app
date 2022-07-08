import React from "react";
import { StyleSheet } from "react-native";
import { Button, Overlay, Text } from "react-native-elements";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";

export default function EkadasiOverlay({ isVisible, onPress, ...rest }) {
  return (
    <>
      <Overlay
        isVisible={isVisible}
        fullScreen={true}
        overlayStyle={{ marginTop: 75, marginBottom: 75 }}
      >
        <ScrollView stickyHeaderIndices={[0]}>
          <Button
            title="<<< Close >>>"
            onPress={onPress}
            buttonStyle={{ backgroundColor: "#fff" }}
            titleStyle={{
              marginTop: 20,
              marginBottom: 10,
              paddingTop: 20,
              color: "red",
            }}
          />
          <Text className="pt-8 px-8 py-8 text-lg">
            NOTE: A future release of this app will include text about this
            Ekadasi.
          </Text>
        </ScrollView>
      </Overlay>
    </>
  );
}
