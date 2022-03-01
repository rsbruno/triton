import type { NextPage } from "next";
import Head from "next/head";
import { CardSong } from "../components/CardSong/Index";
import { ContainerCardSong } from "../components/ContainerCardSong";
import { Title } from "../components/Title/Inde";
import styles from "../styles/Home.module.scss";

import songsJSON from "../mocks/songs.json";
import { useEffect, useState } from "react";

export type SongsProps = {
  name: string;
  author: string;
  banner: string;
};

const Home: NextPage = () => {
  const [songs, setSongs] = useState<SongsProps[]>([]);

  useEffect(() => {
    setSongs(songsJSON);
  }, [songsJSON]);

  return (
    <div className={styles.container}>
      <Head>
        <title>MySpot</title>
      </Head>

      <ContainerCardSong title="Tocado Recentemente">
        {songs.map((song, key) => (
          <CardSong key={key} song={song} />
        ))}
      </ContainerCardSong>

      {/* <ContainerCardSong title="Episódios para você">
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
      </ContainerCardSong> */}
    </div>
  );
};

export default Home;
