import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Question from "../Components/Layout/Question";
import CheckboxInput from "../Components/Forms/CheckboxInput";

const Life = () => {
  // use custom AppState hook to set state for all pages
  const [state, setState] = useAppState();

  // use React Hook Form to handle form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });

  // use React Router to navigate
  const navigate = useNavigate();

  // set state and navigate to next page
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/scale");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>What does this affect?</Question>
      <fieldset className="form-check fs-4">
        <CheckboxInput register={register} placeholder="physicalHealth">
          My physical health
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="mentalHealth">
          My mental health
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="affordEssentials">
          My ability to afford essentials
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="nonEssentials">
          My ability to afford non-essentials
        </CheckboxInput>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Life;
