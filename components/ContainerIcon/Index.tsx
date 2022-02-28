import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonHoverProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  background: string;
};

export function ContainerIcon({ children, background, ...rest }: ButtonHoverProps) {
  return (
    <div
      {...rest}
      className={styles.button}
      style={{
        background,
      }}
    >
      {children}
    </div>
  );
}
