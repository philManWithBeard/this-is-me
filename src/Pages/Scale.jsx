import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";
import Question from "../Components/Layout/Question";

const Scale = () => {
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
    navigate("/confirmation");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>How much does this issue affect me?</Question>
      <fieldset>
        <input
          type="checkbox"
          placeholder="biggestIssue"
          {...register("biggestIssue", {})}
        />
        <label htmlFor="biggestIssue">My biggest issue</label>
        <br />
        <input
          type="checkbox"
          placeholder="affectLot"
          {...register("affectLot", {})}
        />
        <label htmlFor="affectLot">Affects me a lot</label>
        <br />
        <input
          type="checkbox"
          placeholder="affects"
          {...register("affects", {})}
        />
        <label htmlFor="affects">Affects me</label>
        <br />
        <input
          type="checkbox"
          placeholder="affectLittle"
          {...register("affectLittle", {})}
        />
        <label htmlFor="affectLittle">Affects me a little</label>
        <br />
        <input
          type="checkbox"
          placeholder="doesntAffect"
          {...register("doesntAffect", {})}
        />
        <label htmlFor="doesntAffect">Doesn't affect me</label>
        <br />
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Scale;
