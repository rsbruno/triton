import type { NextPage } from "next";
import Head from "next/head";
import { CardSong } from "../components/CardSong/Index";
import { ContainerCardSong } from "../components/ContainerCardSong";
import { Title } from "../components/Title/Inde";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MySpot</title>
      </Head>

      <ContainerCardSong title="Tocado Recentemente">
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
      </ContainerCardSong>

      <ContainerCardSong title="Episódios para você">
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
        {/* <CardSong /> */}
        <CardSong />
      </ContainerCardSong>
    </div>
  );
};

export default Home;
