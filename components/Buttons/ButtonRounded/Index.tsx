import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonRoundedProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function ButtonRounded({ children, ...rest }: ButtonRoundedProps) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}
