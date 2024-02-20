import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";
import { Data1 } from "../Components/Chart/Data/data1";
import { Data2 } from "../Components/Chart/Data/data2";
import { DonutDatasetTransition } from "../Components/Chart/DonutDatasetTransition"
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

  const searchPostcode = (query) => {
    API.search(query)
      .then((response) => {
        const ftpData = response.data;
        const laua = ftpData.data.attributes.laua
        console.log(laua);
        Sanity.sanitySearch(laua)
        .then((response2)=> {
          const sanityData = response2.data;
          const sData = JSON.stringify(sanityData);
          const sanData = JSON.parse(sData);
          console.log(sanData);
          console.log(sanData.result[1].housePrice);
          while(Data1.length > 0) {
            Data1.pop();
          }
          Data1.push({name: 'Past Salary', value: sanData.result[1].meanAnnualPay})
          Data1.push({name: 'Past Price', value: sanData.result[1].housePrice})
          while(Data2.length > 0) {
            Data2.pop();
          }
          Data2.push({name: 'Present Salary', value: sanData.result[21].meanAnnualPay})
          Data2.push({name: 'Past Price', value: sanData.result[21].housePrice}) 
        })
      })
      };
      
  const postcode = state.postcode  

  searchPostcode(postcode)

  return (
    <>
    <h2>Sam's Fancy Statistics for {state.postcode}</h2>
    <p>Select period:</p>
    <DonutDatasetTransition width={800} height={300}/>
    <Form onSubmit={handleSubmit(saveData)}>
      
      <fieldset>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
    </>
  );
};

export default Statistics;
