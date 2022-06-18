import { SafeAreaView, FlatList } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import TopHomeElements from "../components/HomeScreenComponents/TopHomeElements";
import * as data from "../data/data-array-2022";

export default function HomeScreen({}: // navigation,
RootTabScreenProps<"Home">) {
  const Item = ({
    dayOfWeek,
    monthName,
    dayInMonth,
  }: {
    dayOfWeek: string;
    monthName: string;
    dayInMonth: string;
  }) => (
    <View className="bg-[#F8D36E] mt-3 mb-3 border-2 border-[#F8BE6E] rounded-xl">
      <Text className="text-base text-center text-[#fffff] leading-10 font-semibold">
        {dayOfWeek}, {monthName} {dayInMonth}
      </Text>
    </View>
  );
  const renderItem = ({ item }: { item: any }) => (
    <Item
      dayOfWeek={item.dayOfWeek}
      monthName={item.monthName}
      dayInMonth={item.dayInMonth}
    />
  );
  return (
    <>      
      <SafeAreaView className="bg-slate-50 flex-1">
        <FlatList
          ListHeaderComponent={<TopHomeElements />}
          data={data.thisYear2022}
          renderItem={renderItem}
          keyExtractor={(item) => item.monthId + item.dayInMonth}
        />
      </SafeAreaView>
    </>
  );
}
