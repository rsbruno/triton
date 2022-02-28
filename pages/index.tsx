import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/TemplateMain/Footer/Index";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MySpot</title>
      </Head>

      <main className={styles.container}>
        <nav>
          <ul>
            <li>log aqui</li>
          </ul>

          <ul>
            <li>inicio</li>
            <li>buscar</li>
            <li>sua biblioteca</li>
          </ul>

          <ul>
            <li>criar playlist</li>
            <li>músicas curtidas</li>
          </ul>
        </nav>

        <main>conteudo aqui</main>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
