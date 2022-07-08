import { SafeAreaView, FlatList } from "react-native";

import * as data from "../data/data-array-2022";
import ListEachEkadasiThisYear from "../components/ListEachEkadasiThisYear";
import ListItemSeparator from "../components/ListItemSeparator";
import { RootTabScreenProps } from "../types";
import TopHomeElements from "../components/HomeScreenComponents/TopHomeElements";

export default function HomeScreen({}: // navigation,
RootTabScreenProps<"Home">) {
  const renderItem = ({ item }: { item: any }) => (
    <ListEachEkadasiThisYear
      dayOfWeek={item.dayOfWeek}
      monthName={item.monthName}
      dayInMonth={item.dayInMonth}
      onPress={() => console.log("message here", item.dayOfWeek)}
    />
  );
  return (
    <>
      <SafeAreaView className="bg-slate-50 flex-1">
        <FlatList
          ListHeaderComponent={<TopHomeElements />}
          data={data.thisYear2022}
          renderItem={renderItem}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={(item) => item.monthId + item.dayInMonth}
        />
      </SafeAreaView>
    </>
  );
}
