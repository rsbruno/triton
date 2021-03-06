import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonHoverProps = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export function ButtonPlay({ children, ...rest }: ButtonHoverProps) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
