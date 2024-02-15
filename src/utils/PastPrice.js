import jsonData from "./CountyAvg2000.json";
export default {
  paPrice: function pastPrice(county) {
    const pPrice = JSON.stringify(jsonData);
    const past = JSON.parse(pPrice);
    const countyMap = {};

    past.forEach((countyData) => {
      const countyName = countyData.COUNTY;
      const price = countyData.Price;
      countyMap[countyName] = price;
    });
    const average = countyMap[county].toFixed(0);
    const formatted_number = average
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formatted_number;
  },
};
