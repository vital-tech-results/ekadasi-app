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
  return mapOverYear;
};

export default RenderNextEkadasiIsConditionally;
