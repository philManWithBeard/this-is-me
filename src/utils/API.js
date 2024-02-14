import axios from "axios";
const BASEURL = "https://findthatpostcode.uk//postcodes/";
//const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + ".json");
    
  }
};

// if cty != null then cty_name = County 
//if null - pfa_name":"Hampshire"