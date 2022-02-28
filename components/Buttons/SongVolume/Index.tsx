import styles from "./styles.module.scss";
import { AiOutlineSound } from "react-icons/ai";

export function SongVolumeButton() {
  return (
    <div className={styles.container}>
      <AiOutlineSound />
      <input type="range"></input>
    </div>
  );
}
