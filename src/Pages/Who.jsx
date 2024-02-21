import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Question from "../Components/Layout/Question";
import CheckboxInput from "../Components/Forms/CheckboxInput";

const Who = () => {
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
    navigate("/life");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>Who does this issue affect?</Question>
      <fieldset className="form-check fs-4">
        <CheckboxInput register={register} placeholder="mePersonally">
          Me personally
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="myChildren">
          My children
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="myRelatives">
          My relatives
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="myFriends">
          My friends
        </CheckboxInput>
        <CheckboxInput register={register} placeholder="myColleagues">
          My colleagues
        </CheckboxInput>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Who;
