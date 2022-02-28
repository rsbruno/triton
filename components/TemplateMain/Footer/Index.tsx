import styles from "./styles.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgToggleSquareOff } from "react-icons/cg";
import { BsViewList, BsSpeaker } from "react-icons/bs";
import { GiPreviousButton } from "react-icons/gi";
import { SongVolumeButton } from "../../Buttons/SongVolume/Index";
import { PlayerMusic } from "../../PlayerMusic/Index";
import { HoverButton } from "../../Buttons/ButtonHover/Index";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarSong}></div>
      <div className={styles.titleSong}>
        <strong>Nome da Musica</strong>
        <span>Nome do canal</span>
      </div>
      <div className={styles.containerbuttons}>
        <AiOutlinePlusCircle />
        <CgToggleSquareOff />
      </div>

      <PlayerMusic />

      <div className={styles.containerbuttons}>
        <BsViewList />
        <BsSpeaker />
        <SongVolumeButton />
      </div>

      <HoverButton>
        <GiPreviousButton />
      </HoverButton>
    </div>
  );
}
