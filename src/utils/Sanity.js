import axios from "axios";

const BASEURL =
  "https://sh0o5ivn.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27incomeHousePrice%27+%26%26+areaCode+%3D%3D+%27";

export default {
  sanitySearch: function (laua) {
    return axios.get(
      BASEURL +
        laua +
        "%27%5D%7C+order%28year%29%7Byear%2C_id%2C+regionName%2C+housePrice%2CmeanAnnualPay%2C+medianAnnualPay%7D"
    );
  },
};
