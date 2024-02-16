import jsonData from "./CountyAvg2023.json";
export default {
  prePrice: function presentPrice(county) {
    const pPrice = JSON.stringify(jsonData);
    const present = JSON.parse(pPrice);
    const countyMap = {};

    present.forEach((countyData) => {
      const countyName = countyData.COUNTY;
      const price = countyData.Price;
      countyMap[countyName] = price;
    });
    const average = countyMap[county].toFixed(0);
    const formatted_number = average
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(county);
    return formatted_number;
  },
};
