import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Data1 } from "../Components/Chart/Data/data1";
import { Data2 } from "../Components/Chart/Data/data2";
import { DonutDatasetTransition } from "../Components/Chart/DonutDatasetTransition";
import Stats from "../Components/Chart/Data/stats";
import API from "../utils/API";
import Sanity from "../utils/Sanity";

const Statistics = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/who");
  };

  let pastXArr = [];
  let presXArr = [];
  const searchPostcode = (query) => {
    API.search(query).then((response) => {
      const ftpData = response.data;
      const laua = ftpData.data.attributes.laua;
      console.log(laua);
      Sanity.sanitySearch(laua).then((response2) => {
        const sanityData = response2.data;
        const sData = JSON.stringify(sanityData);
        const sanData = JSON.parse(sData);
        console.log(sanData);
        console.log(sanData.result[1].housePrice);
        while (Data1.length > 0) {
          Data1.pop();
        }
        Data1.push({
          name: "Past Salary",
          value: sanData.result[1].meanAnnualPay,
        });
        Data1.push({ name: "Past Price", value: sanData.result[1].housePrice });
        while (Data2.length > 0) {
          Data2.pop();
        }
        Data2.push({
          name: "Present Salary",
          value: sanData.result[21].meanAnnualPay,
        });
        Data2.push({
          name: "Past Price",
          value: sanData.result[21].housePrice,
        });

        let pastCalc =
          sanData.result[1].housePrice / sanData.result[1].meanAnnualPay;
        let presCalc =
          sanData.result[21].housePrice / sanData.result[21].meanAnnualPay;
        console.log("calc: " + pastCalc);
        if (pastXArr.length > 0) {
          pastXArr.pop();
        }
        pastXArr.push(pastCalc.toFixed(0));
        if (presXArr.length > 0) {
          presXArr.pop();
        }
        presXArr.push(presCalc.toFixed(0));
      });
    });
  };

  const postcode = state.postcode;

  const disPostcode = postcode.toUpperCase();

  searchPostcode(postcode);

  return (
    <section>
      <h2>Salary vs House Price for {disPostcode}</h2>
      <p id="select">Select period:</p>
      <DonutDatasetTransition width={300} height={300} />

      <Stats pastX={pastXArr} presentX={presXArr} />
      <Form onSubmit={handleSubmit(saveData)}>
        <Button>Next {">"}</Button>
      </Form>
    </section>
  );
};

export default Statistics;
