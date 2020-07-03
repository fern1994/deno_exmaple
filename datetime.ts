import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

// เป็นวันที่เท่าไหร่ของปี
console.log(dayOfYear(new Date("2020-06-30")));
// วันที่ปัจจุบันเป็นวันที่เท่าไหร่ของปี
console.log(currentDayOfYear());
