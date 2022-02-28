import { BsFillPlayFill } from "react-icons/bs";
import styles from "./styles.module.scss";

export function CardSong() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerSong}>
        <button className={styles.playSong}>
          <BsFillPlayFill />
        </button>
      </div>
      <h4>Nome da Música</h4>
      <h6>Nome do autor</h6>
    </div>
  );
}
