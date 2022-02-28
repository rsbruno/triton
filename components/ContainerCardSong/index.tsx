import { ReactNode } from "react";
import { Title } from "../Title/Inde";
import styles from "./styles.module.scss";

type ContainerCardSong = {
  children: ReactNode;
  title: string;
};

export function ContainerCardSong({ children, title }: ContainerCardSong) {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <Title>{title}</Title>
        <a href="">ver tudo</a>
      </div>
      <div className={styles.cards}>{children}</div>
    </div>
  );
}
