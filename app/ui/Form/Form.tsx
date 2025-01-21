"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PasswordInput from "../PasswordInput/PasswordInput";
import ValidationContent from "./ValidationContent";
import { FormInputs } from "../types";

const VALID_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const getValidEmail = (value: string) => VALID_EMAIL.test(value)

function Form() {
  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm<FormInputs>();

  const password = watch("password");
  const email = watch("email");

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__input}>
        <Input
          isCorrect={getValidEmail(email)}
          error={Boolean(errors.email)}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: VALID_EMAIL,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className={styles.form__inputError}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.form__input}>
        <PasswordInput register={register} error={Boolean(errors.password)} />
      </div>
      <ValidationContent password={password} errors={Boolean(errors.password)} />
      <Button type="submit">Sign up</Button>
    </form>
  );
}

export default Form;
