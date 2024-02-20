import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";
import Question from "../Components/Layout/Question";

const Life = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();

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
