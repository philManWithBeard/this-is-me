import React from "react";

const CheckboxInput = ({ children }, placeholder) => {
  return (
    <>
      <input
        type="checkbox"
        placeholder={placeholder}
        {...register(placeholder, {})}
      />
      <label for={placeholder}>{children}</label>
      <br />
    </>
  );
};

export default CheckboxInput;
