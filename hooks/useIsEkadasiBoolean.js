import { useEffect, useState } from "react";

import { thisYear2022 } from "../data/data-array-2022";
import Dates from "../constants/Dates";

//? go through every date in the array
//? if today is not ekadasi then setIsEkadasi === false
//? if today is Ekadasi then setIsEkadasi === true

const { DAYOFMONTH, DAYOFWEEK, LISTOFDAYS, MONTH } = Dates;

let weekday = LISTOFDAYS[DAYOFWEEK];

export default function useIsEkadasiBoolean() {
  const [isEkadasi, setIsEkadasi] = useState([]);

  //* create funtion here
  const isTodayEkadasi = () => {
    const trueOrFalse = thisYear2022
      .filter((data) => {
        const dayOfMonthIsSame = Number(data.dayInMonth) === DAYOFMONTH;
        const dayOfWeekIsSame = data.dayOfWeek === weekday;
        const monthIsSame = Number(data.monthId) === MONTH;
        if (dayOfMonthIsSame && dayOfWeekIsSame && monthIsSame) {
          return true;
        }
      })
      .map((element) => {
        return element;
      });

    setIsEkadasi(trueOrFalse);
  };

  useEffect(() => {
    //*call the above funtion here
    isTodayEkadasi();
  }, []);

  return isEkadasi;
}
