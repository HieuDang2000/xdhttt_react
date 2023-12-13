import { baseurl } from "./url";

export const logincheck = async ({ email, password }) => {
  const url = `${baseurl}?login=${email}-${password}`
  const res = await fetch(url);
  return res.json();
};
