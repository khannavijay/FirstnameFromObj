const cityList = require("../country/state/city/index.js");
const firstName = require("../utilities/utils/index.js");

const getPeopleInCity = () => {
  return firstName(cityList);
};
console.log(getPeopleInCity());
module.exports = getPeopleInCity;
