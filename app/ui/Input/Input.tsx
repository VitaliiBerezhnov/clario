import classNames from "classnames";
import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  isCorrect?: boolean;
};

function Input({
  placeholder = "Email",
  type = "text",
  isCorrect,
  error,
  className,
  children,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        styles.input,
        error && styles.input_error,
        isCorrect && styles.input_correct,
        className,
      )}
      {...props}
    >
      {children}
    </input>
  );
}

export default Input;
