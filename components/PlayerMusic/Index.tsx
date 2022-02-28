import styles from "./styles.module.scss";

import { HoverButton } from "../Buttons/ButtonHover/Index";
import { ButtonPlay } from "../Buttons/ButtonPlay/Index";

import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";

export function PlayerMusic() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerButtons}>
          <HoverButton>
            <GiPreviousButton />
          </HoverButton>
          <ButtonPlay>
            <FaPlay />
          </ButtonPlay>
          <HoverButton>
            <GiNextButton />
          </HoverButton>
        </div>

        <div className={styles.statusContainer}>
          <span>17:08</span>
          <div></div>
          <span>17:08</span>
        </div>
      </div>
    </div>
  );
}
