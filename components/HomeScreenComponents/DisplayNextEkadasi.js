import React, { Component } from "react";
import { thisYear2022 } from "../../data/data-array-2022";
import { Text } from "react-native";
import NextEkadasiIs from "./NextEkadasiIs";
import TodayIsEkadasi from "./TodayIsEkadasi";

class DisplayNextEkadasi extends Component {
  state = {
    visible: true,
    month: new Date().getMonth(),
    dayOfMonth: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
    dayOfMonthPlusOne: new Date().getDate() + 1,
  };

  toggleOverlay = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    let listOfDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekday = listOfDays[this.state.dayOfWeek];

    const { month, dayOfMonth, dayOfMonthPlusOne } = this.state;

    return thisYear2022.map((data, index) => {
      const monthIdEqualsMonth = Number(data.monthId) === month;
      const monthIdEqualsMonthPlusOne = Number(data.monthId) === month + 1;
      const dataDayInMonth = Number(data.dayInMonth);
      const dataDayOfWeek = data.dayOfWeek;

      if (
        dayOfMonth === dataDayInMonth &&
        dataDayOfWeek === weekday &&
        monthIdEqualsMonth
      ) {
        return (
          <React.Fragment key={index + data.dayInMonth + data.ekadasiName}>
            <TodayIsEkadasi
              key={data.dayInMonth}
              buttonStyle={{ backgroundColor: "#15c240" }}
              containerStyle={{ marginBottom: 20 }}
              titleStyle={{ color: "white", fontSize: 30, marginBottom: 10 }}
              title={"Today is Ekadasi"}
              isVisible={!this.state.visible}
              onPress={this.toggleOverlay}
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
              breakFastTime={data.breakFastTime}
              style={{ fontSize: 25 }}
            />
          </React.Fragment>
        );
      }

      if (
        (monthIdEqualsMonth && dataDayInMonth > dayOfMonth) ||
        (monthIdEqualsMonthPlusOne && dataDayInMonth <= dayOfMonth)
      ) {
        return (
          <React.Fragment key={index + data.dayInMonth + data.ekadasiName}>
            <Text
              style={{
                color: "rgba(0,0,0,0.4)",
                fontSize: 14,
                lineHeight: 40,
                textAlign: "center",
              }}
            >
              The next Ekadasi is...
            </Text>
            <NextEkadasiIs
              style={{ fontSize: 25 }}
              dayOfWeek={data.dayOfWeek}
              monthName={data.monthName}
              dayInMonth={data.dayInMonth}
              ekadasiName={data.ekadasiName}
            />
          </React.Fragment>
        );
      }
    });
  }
}

export default DisplayNextEkadasi;
