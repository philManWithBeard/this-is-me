import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";

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

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <h2>Sam's Fancy Statistics for {state.postcode}</h2>
      <fieldset>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Statistics;
