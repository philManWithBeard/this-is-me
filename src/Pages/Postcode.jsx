import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";
import Question from "../Components/Layout/Question";


const Postcode = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/statistics");
  };


  
  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <Question>
        There's a housing crisis. <br /> Let's show your MP how bad it is.
      </Question>
      <fieldset>
        <Field label="Postcode" error={errors?.postcode}>
          <Input
            {...register("postcode", { required: "Postcode is required" })}
            type="postcode"
            id="postcode"
          />
        </Field>
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Postcode;
