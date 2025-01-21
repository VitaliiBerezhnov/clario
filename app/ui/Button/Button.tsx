import React from "react";
import style from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={style.button}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
