import classNames from "classnames";
import styles from "./Form.module.css";
import {
  hasCharacters,
  hasUppercaseAndLowercase,
  hasDigit,
} from "../PasswordInput/PasswordInput";

type ValidationContentProps = {
  password: string;
  errors?: boolean;
}

function ValidationContent({ password, errors }: ValidationContentProps) {
  return (
    <div className={styles.form__validContent}>
      <p
        className={classNames(
          errors && !hasCharacters(password) && styles.form__validContent_error,
          hasCharacters(password) && styles.form__validContent_correct
        )}
      >
        8 characters or more (no spaces)
      </p>
      <p
        className={classNames(
          errors &&
            !hasUppercaseAndLowercase(password) &&
            styles.form__validContent_error,
          hasUppercaseAndLowercase(password) &&
            styles.form__validContent_correct
        )}
      >
        Uppercase and lowercase letters
      </p>
      <p
        className={classNames(
          errors && !hasDigit(password) && styles.form__validContent_error,
          hasDigit(password) && styles.form__validContent_correct
        )}
      >
        At least one digit{" "}
      </p>
    </div>
  );
}

export default ValidationContent;
