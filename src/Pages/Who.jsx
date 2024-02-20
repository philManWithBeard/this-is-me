import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import CheckboxInput from "../Components/Forms/CheckboxInput";
import Question from "../Components/Layout/Question";

const Who = () => {
  const [state, setState] = useAppState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/life");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>Who does this issue affect?</Question>
      <fieldset className="form-check fs-4">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="mePersonally"
            {...register("mePersonally", {})}
          />
          <label className="form-check-label" htmlFor="mePersonally">
            Me personally
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="myChildren"
            {...register("myChildren", {})}
          />

          <label className="form-check-label" htmlFor="myChildren">
            My children
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="myRelatives"
            {...register("myRelatives", {})}
          />
          <label className="form-check-label" htmlFor="myRelatives">
            My relatives
          </label>
        </div>
        <input
          className="form-check-input"
          type="checkbox"
          placeholder="myFriends"
          {...register("myFriends", {})}
        />
        <label className="form-check-label" htmlFor="myFriends">
          My friends
        </label>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="myColleagues"
            {...register("myColleagues", {})}
          />
          <label className="form-check-label" htmlFor="myColleagues">
            My colleagues
          </label>
        </div>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Who;
