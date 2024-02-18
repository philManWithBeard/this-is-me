import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";

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
      <h2>How much does this issue affect me?</h2>
      <fieldset>
        <input
          type="checkbox"
          placeholder="biggestIssue"
          {...register("biggestIssue", {})}
        />
        <label for="biggestIssue">My biggest issue</label>
        <br />
        <input
          type="checkbox"
          placeholder="affectLot"
          {...register("affectLot", {})}
        />
        <label for="affectLot">Affects me a lot</label>
        <br />
        <input
          type="checkbox"
          placeholder="affects"
          {...register("affects", {})}
        />
        <label for="affects">Affects me</label>
        <br />
        <input
          type="checkbox"
          placeholder="affectLittle"
          {...register("affectLittle", {})}
        />
        <label for="affectLittle">Affects me a little</label>
        <br />
        <input
          type="checkbox"
          placeholder="doesntAffect"
          {...register("doesntAffect", {})}
        />
        <label for="doesntAffect">Doesn't affect me</label>
        <br />
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Scale;
