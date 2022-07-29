import React from "react";
import { thisYear2022 } from "../../data/data-array-2022";
import { Text } from "../Themed";
import NextEkadasiIs from "./NextEkadasiIs";

const RenderNextEkadasiIsConditionally = (props) => {
  let { month, dayOfMonth } = props;

  const mapOverYear = thisYear2022.map((data, index) => {
    const monthIdEqualsMonth = Number(data.monthId) === month;
    const monthIdEqualsMonthPlusOne = Number(data.monthId) === month + 1;
    const dataDayInMonth = Number(data.dayInMonth);
    if (
      (monthIdEqualsMonth && dataDayInMonth > dayOfMonth) ||
      (monthIdEqualsMonthPlusOne && dataDayInMonth <= dayOfMonth)
    ) {
      return (
        <React.Fragment key={index + data.dayInMonth + data.ekadasiName}>
          <Text
            className="text-xs text-right leading-8 "
            lightColor="#004ebd"
            darkColor="#06349a"
          >
            The next Ekadasi is...
          </Text>
          <NextEkadasiIs
            style="text-xl text-left leading-10"
            dayOfWeek={data.dayOfWeek}
            monthName={data.monthName}
            dayInMonth={data.dayInMonth}
            ekadasiName={data.ekadasiName}
          />
        </React.Fragment>
      );
    }
  });
  return mapOverYear;
};

export default RenderNextEkadasiIsConditionally;
