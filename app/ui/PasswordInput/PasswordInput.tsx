"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./PasswordInput.module.css";
import Input from "../Input/Input";
import { PasswordInputProps } from "../types";
import SVGHide from "./SVGHide";
import SVGShow from "./SVGShow";

const MIN_PASSWORD = 8;
const MAX_PASSWORD = 64;

export const hasCharacters = (value = "") =>
  !/\s/.test(value) &&
  value.length >= MIN_PASSWORD &&
  value.length <= MAX_PASSWORD;

export const hasUppercaseAndLowercase = (value = "") =>
  /[A-Z]/.test(value) && /[a-z]/.test(value);

export const hasDigit = (value = "") => /\d/.test(value);

const VALIDATE_MAP = {
  hasCharacters,
  hasUppercaseAndLowercase,
  hasDigit,
};

function PasswordInput({ register, error }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.passwordWrapper}>
      <Input
        {...register("password", {
          validate: VALIDATE_MAP,
        })}
        placeholder="Create your password"
        className={classNames(styles.passwordInput)}
        error={error}
        type={showPassword ? "text" : "password"}
      />
      <button
        type="button"
        className={classNames(
          styles.passwordInput__visibility,
          error && styles.passwordInput__visibility_error
        )}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <SVGShow /> : <SVGHide />}
      </button>
    </div>
  );
}

export default PasswordInput;
