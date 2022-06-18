import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, withTheme, Overlay } from "react-native-elements";

import { Text, View } from "./Themed";
import { Select } from "@mobile-reality/react-native-select-pro";

import listOfLocations from "../data/locations";

const SelectLocation = () => {
  const [visible, setVisible] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(
    "Choose your location." || []
  );

  const [dataFromApi, setDataFromApi] = useState([]);

  const postData = async () => {
    console.log(selectedLocation);
    const myCal = selectedLocation
      .replace(/,/g, "%2C")
      .replace(/\+/g, "%2B")
      .replace(/\s/g, "+");
    console.log(myCal);
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

  // useEffect(() => {
  //   postData();
  // }, []);

  const handleSelectedValue = selectedOption => {
    setSelectedLocation(selectedOption);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "space-around", padding: 50 }}>
        <Text>Choose your location</Text>
        <Select
          options={listOfLocations}
          selectContainerStyle={{ borderWidth: 1 }}
          optionsListStyle={{
            borderWidth: 1,
          }}
          selectControlStyle={{
            borderWidth: 1,
            backgroundColor: "azure",
            height: 50,
          }}
          onSelect={selectedOption => {
            selectedOption = selectedOption || {};
            handleSelectedValue(selectedOption.value);
          }}
        />

        <Text>You have chosen: {selectedLocation}</Text>
        <Button
          title="Submit Time Zone"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
            borderRadius: 50,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 5,
            height: 50,
            width: "100%",
            marginVertical: 5,
          }}
          onPress={() => {
            if (selectedLocation === "Choose your location.") {
              toggleOverlay();
            } else {
              postData();
            }
          }}
        />

        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          supportedOrientations={["portrait", "landscape"]}
          animationType="fade"
        >
          <Text>Please select an location first.</Text>
        </Overlay>
      </View>
    </>
  );
};

export default SelectLocation;
