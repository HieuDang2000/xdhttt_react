import { baseurl, sheetName } from "./url";

export const addData = async ({ name, values }) => {
    console.log(values)
  let valueString = values.reduce((res, cur) => res + "-" + cur);
  console.log(values)

  if (name === sheetName.User) {
    valueString += "-0";
  }
  console.log(values)

  const url = `${baseurl}?post=${name}&values=${valueString}`;
  console.log(url);
  const status = await fetch(url, {
    method: "POST",
  });
  console.log(values)
  return await status.json();
};
