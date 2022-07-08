import { BlurView } from "expo-blur";
import { Card, Divider } from "react-native-elements";
import { Image } from "react-native";

import DisplayNextEkadasi from "../HomeScreenComponents/DisplayNextEkadasi";
import { Text, View } from "../Themed";

export default function TopHomeElements(
  {
    // navigation,
  }
) {
  return (
    <>
      <View>
        {/* <Card
          containerStyle={{
            backgroundColor: "rgb(248, 211, 110)",
          }}
        >
          <Card.Title>Ekadasi dates for 2022</Card.Title>
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
        /> */}
        <View className="bg-[#F8D36E] p-8 mb-12">
          <DisplayNextEkadasi />
        </View>
        <BlurView intensity={10} tint="dark">
          <Text
            className="text-base text-center leading-9 font-semibold"
            lightColor="#123b7a"
            darkColor="white"
          >
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
