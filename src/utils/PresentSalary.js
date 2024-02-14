import jsonData from "./Annual_Pay_2023.json"
export default {
    prSalary: function presentSalary() {

  
      const prSalary = JSON.stringify(jsonData);
      const present = JSON.parse(prSalary);
  
      const presentSal = present.Mean;
      return presentSal;
    },
  };

