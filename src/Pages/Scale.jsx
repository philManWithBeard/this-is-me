import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Question from "../Components/Layout/Question";

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
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="biggestIssue"
            // register form field with react-hook-form
            {...register("biggestIssue", {})}
          />
          <label className="form-check-label" htmlFor="biggestIssue">
            My biggest issue
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="affectLot"
            // register form field with react-hook-form
            {...register("affectLot", {})}
          />
          <label className="form-check-label" htmlFor="affectLot">
            Affects me a lot
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="affects"
            // register form field with react-hook-form
            {...register("affects", {})}
          />
          <label className="form-check-label" htmlFor="affects">
            Affects me
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="affectLittle"
            // register form field with react-hook-form
            {...register("affectLittle", {})}
          />
          <label className="form-check-label" htmlFor="affectLittle">
            Affects me a little
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="doesntAffect"
            // register form field with react-hook-form
            {...register("doesntAffect", {})}
          />
          <label className="form-check-label" htmlFor="doesntAffect">
            Doesn't affect me
          </label>
        </div>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Scale;
