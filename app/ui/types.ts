import { UseFormRegister } from 'react-hook-form';

export type PasswordInputProps = {
  register: UseFormRegister<FormInputs>;
  error: boolean;
}

export type FormInputs = {
  email: string;
  password: string;
}
