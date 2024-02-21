import React from "react";

const CheckboxInput = ({ children, register, placeholder }) => {
  return (
    <>
      <input
        type="checkbox"
        className="form-check-input"
        {...register(placeholder, {})}
      />
      <label htmlFor={placeholder} className="form-check-label">
        {children}
      </label>
      <br />
    </>
  );
};

export default CheckboxInput;
