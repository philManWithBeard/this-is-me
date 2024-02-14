import jsonData from "./Annual_Pay_2000.json"
export default {
  paSalary: function pastSalary() {
    const pSalary = JSON.stringify(jsonData);
    const past = JSON.parse(pSalary);

    const pastSal = past.Mean;
    console.log(pastSal);
    return pastSal;
  },
};
