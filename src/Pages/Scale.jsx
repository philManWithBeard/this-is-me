import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Question from "../Components/Layout/Question";
import CheckboxInput from "../Components/Forms/CheckboxInput";

const Scale = () => {
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
    navigate("/confirmation");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>How much does this issue affect me?</Question>
      <fieldset className="form-check fs-4">
        <CheckboxInput register={register} placeholder="biggestIssue">
          My biggest issue
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="affectLot">
          Affects me a lot
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="affects">
          Affects me
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="affectLittle">
          Affects me a little
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="doesntAffect">
          Doesn't affect me
        </CheckboxInput>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Scale;
