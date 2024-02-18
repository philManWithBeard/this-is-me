import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";

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
      <h2>Who does this issue affect?</h2>
      <fieldset>
        <input
          type="checkbox"
          placeholder="mePersonally"
          {...register("mePersonally", {})}
        />
        <label for="mePersonally">Me Personally</label>
        <br />
        <input
          type="checkbox"
          placeholder="myChildren"
          {...register("myChildren", {})}
        />
        <label for="myChildren">My Children</label>
        <br />
        <input
          type="checkbox"
          placeholder="myRelatives"
          {...register("myRelatives", {})}
        />
        <label for="myRelatives">My Relatives</label>
        <br />
        <input
          type="checkbox"
          placeholder="myFriends"
          {...register("myFriends", {})}
        />
        <label for="myFriends">My friends</label>
        <br />
        <input
          type="checkbox"
          placeholder="myColleagues"
          {...register("myColleagues", {})}
        />
        <label for="myColleagues">My Colleagues</label>
        <br />
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
  );
};

export default Who;
