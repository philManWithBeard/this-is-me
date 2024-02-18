import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";

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
      <h2>What does this affect?</h2>
      <fieldset>
        <input
          type="checkbox"
          placeholder="physicalHealth"
          {...register("physicalHealth", {})}
        />
        <label for="physicalHealth">My physical health</label>
        <br />
        <input
          type="checkbox"
          placeholder="mentalHealth"
          {...register("mentalHealth", {})}
        />
        <label for="mentalHealth">My mental health</label>
        <br />
        <input
          type="checkbox"
          placeholder="affordEssentials"
          {...register("affordEssentials", {})}
        />
        <label for="affordEssentials">My ability to afford essentials</label>
        <br />
        <input
          type="checkbox"
          placeholder="nonEssentials"
          {...register("nonEssentials", {})}
        />
        <label for="nonEssentials">My ability to afford non-essentials</label>
        <br />
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Life;
