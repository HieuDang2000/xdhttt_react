const { baseurl } = require("./url");

export const getData = async (obj) => {
  const url = `${baseurl}?get=${obj}`;
  const res = await fetch(url);
  return res.json();
};
