import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function EditScreenInfo() {
  const [isLoading, setLoading] = useState(true);
  const [dataFromApi, setDataFromApi] = useState([]);

  const myCal = "Ahmedabad%2C+Gujarat%2C+India+++++072E37+23N02+++++%2B5.30";
  const postData = async () => {
    try {
      const response = await fetch("https://www.page2api.com/api/v1/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        body: JSON.stringify({
          api_key: "fad6a8be4bd5e0a0c1f4659ae929a542180a9c86",
          url: "https://www.purebhakti.com/resources/vaisnava-calendar",
          real_browser: true,
          cookies: {
            calendar: myCal,
          },
          parse: {
            data: "table",
          },
        }),
      });
      const json = await response.json();
      console.log(json.result);
      setDataFromApi(json.result);
      console.log(dataFromApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={dataFromApi}
        renderItem={({ item }) => <Text>{item.links}asdfasdf</Text>}
      />
    </View>
  );
}
