import { ReactNode } from "react";
import styles from "./styles.module.scss";

type TitleProps = {
  children: ReactNode;
};
export function Title({ children }: TitleProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
