import styles from "./styles.module.scss";

import { BsViewList, BsSpeaker } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgToggleSquareOff } from "react-icons/cg";

import { SongVolumeButton } from "../../Buttons/SongVolume/Index";
import { HoverButton } from "../../Buttons/ButtonHover/Index";
import { PlayerMusic } from "../../PlayerMusic/Index";

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.avatarSong}></div>
      <div className={styles.titleSong}>
        <strong>Nome da Musica</strong>
        <span>Nome do canal</span>
      </div>
      <div className={styles.containerbuttons}>
        <HoverButton>
          <AiOutlinePlusCircle />
        </HoverButton>
        <HoverButton>
          <CgToggleSquareOff />
        </HoverButton>
      </div>

      <PlayerMusic />

      <div className={styles.containerbuttons}>
        <HoverButton>
          <BsViewList />
        </HoverButton>
        <HoverButton>
          <BsSpeaker />
        </HoverButton>
        <HoverButton>
          <SongVolumeButton />
        </HoverButton>
      </div>
    </div>
  );
}
