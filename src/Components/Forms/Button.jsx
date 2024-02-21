import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef();

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
