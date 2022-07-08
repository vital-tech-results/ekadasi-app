import React from "react";
import { Linking, Button, ScrollView } from "react-native";
import { View } from "../components/Themed";

export default function ConstactScreen() {
  return (
    <ScrollView className="bg-slate-50 flex-1 pt-12">
      <View>
        <Button
          title="Contact Support "
          onPress={() =>
            Linking.openURL(
              "mailto:support@vitaltechresults.com?subject=Contacting Ekadasi App Support&body=Hare Krsna! I am contating you from the Ekadasi App."
            )
          }
        />
      </View>
    </ScrollView>
  );
}
