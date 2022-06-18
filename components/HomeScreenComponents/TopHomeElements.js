import {
  Image
} from "react-native";

import { Text, View } from "../Themed";
import { Card, Divider } from "react-native-elements";
import { BlurView } from "expo-blur";

import DisplayNextEkadasi from "../HomeScreenComponents/DisplayNextEkadasi";

export default function TopHomeElements(
  {
    // navigation,
  }
) {
  return (
    <>
      <View>
        <Card
          containerStyle={{
            backgroundColor: "rgb(248, 211, 110)",
          }}
        >
          <Card.Title>
          Ekadasi dates for 2022
          </Card.Title>
          <Card.Divider />
          <DisplayNextEkadasi />
        </Card>
        <Divider
          style={{
            backgroundColor: "rgb(248, 211, 110)",
            padding: 5,
            marginTop: 50,
            marginBottom: 50,
          }}
        />
        <BlurView intensity={10} tint="dark">          
          <Text className="text-base text-center text-[#60646D] leading-9 font-semibold">
            View all Ekadasi dates for 2022.
          </Text>
        </BlurView>

        <View className="items-center mt-8 ">
          <Image
            source={require("../../assets/images/bhaktabhandav.png")}            
            style={{
              width: 100,
              height: 80,
              resizeMode: "contain",
              marginTop: 3,
              marginBottom: 30,
            }}
          />
        </View>
      </View>
    </>
  );
}
