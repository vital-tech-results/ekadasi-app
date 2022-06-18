import { TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <View className="flex-1 items-center justify-center p-8">
      <Text className="text-base font-bold">This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={{ marginTop: 15, paddingVertical: 15 }}
      >
        <Text className="text-base text-[#2e78b7]">Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
