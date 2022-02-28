import styles from "./styles.module.scss";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export function PlayerMusic() {
  return (
    <div className={styles.container}>
      <div className={styles.containerButtons}>
        <button>
          <GiPreviousButton />
        </button>
        
        <button>
          <GiNextButton />
        </button>
      </div>
    </div>
  );
}
