import React, { forwardRef, useImperativeHandle, useRef } from "react";

// use forwardRef to pass reference into button
export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef();

    // expose button functionality to parent component
    useImperativeHandle(ref, () => ({
      click: () => {
        buttonRef.current?.click();
      },
    }));

    return (
      <button
        className={`btn btn-lg btn-${variant} mt-3 custom-button`}
        {...props}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }
);
