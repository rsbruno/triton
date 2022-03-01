import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { SongsProps } from "../../pages";
import styles from "./styles.module.scss";

type CardSongProps = {
  song: SongsProps;
};

export function CardSong({ song }: CardSongProps) {
  const [songObj] = useState<SongsProps>(song);

  return (
    <div className={styles.container}>
      <div className={styles.bannerSong}>
        <img src={song.banner} alt={song.name} />
        <button className={styles.playSong}>
          <BsFillPlayFill />
        </button>
      </div>
      <h4>{songObj.name}</h4>
      <h6>{songObj.author}</h6>
    </div>
  );
}
