import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../Components/state";
import { Field } from "../Components/Forms/Field";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import { Input } from "../Components/Forms/Input";
import beForm from "react-bootstrap/Form";

const Who = () => {
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
    navigate("/life");
  };
  
  return (
    <div style={{display: 'flex', alignItems: 'center', minHeight: '100vh', minWidth: '100vw'}}>
<Form onSubmit={handleSubmit(saveData)}> 
      <h2>Who does this issue affect?</h2>
      <fieldset>
        {["My Physical Health", "My Mental Health", "My ability to afford essentials", "My ability to afford non-essentials"].map(
          (answer, index) => (
            <div key={`default-${index}`} className="mb-3">
              <beForm.Check // prettier-ignore
                type="radio"
                id={`default-${index}`}
                label={answer}
                name = "group1"
            
              />
            </div>
          )
        )}
        <Button>Next {">"}</Button>
      </fieldset>
    </Form>
    </div>
    
  );
};

export default Who;
