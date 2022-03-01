import { Children, ReactNode, useEffect, useState } from "react";
import { SongsProps } from "../../pages";
import { Title } from "../Title/Inde";
import styles from "./styles.module.scss";

type ContainerCardSong = {
  children: ReactNode | ReactNode[];
  title: string;
};

export function ContainerCardSong({ children, title }: ContainerCardSong) {
  const [countChilds, setCountChilds] = useState<number>(0);
  const [listCards, setListCards] = useState<SongsProps[]>([]);

  useEffect(() => {
    const cardsList: any = [];
    Children.forEach(children, (child, index) => {
      if (index < 6) cardsList.push(child);
    });
    setListCards(() => cardsList);
    setCountChilds(() => cardsList.length);
  }, [children]);

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <Title>{title}</Title>
        {countChilds >= 5 && <a href="">ver tudo</a>}
      </div>
      <div className={styles.cards}>{listCards}</div>
    </div>
  );
}
