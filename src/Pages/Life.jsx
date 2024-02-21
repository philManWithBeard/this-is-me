import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Question from "../Components/Layout/Question";

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
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="physicalHealth"
            // register form field with react-hook-form
            {...register("physicalHealth", {})}
          />
          <label className="form-check-label" htmlFor="physicalHealth">
            My physical health
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="mentalHealth"
            // register form field with react-hook-form
            {...register("mentalHealth", {})}
          />
          <label className="form-check-label" htmlFor="mentalHealth">
            My mental health
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="affordEssentials"
            // register form field with react-hook-form
            {...register("affordEssentials", {})}
          />
          <label className="form-check-label" htmlFor="affordEssentials">
            My ability to afford essentials
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            placeholder="nonEssentials"
            // register form field with react-hook-form
            {...register("nonEssentials", {})}
          />
          <label className="form-check-label" htmlFor="nonEssentials">
            My ability to afford non-essentials
          </label>
        </div>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Life;
