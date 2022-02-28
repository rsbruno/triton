import type { NextPage } from "next";
import Head from "next/head";
import { RiHome2Line } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { Footer } from "../components/TemplateMain/Footer/Index";
import styles from "../styles/Home.module.scss";
import { ButtonBackground } from "../components/Buttons/ButtonBackground/Index";
import { AiOutlinePlus } from "react-icons/ai";
import { ButtonCustomLink } from "../components/Buttons/ButtonCustomLink/Index";

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
            <ButtonCustomLink href="">
              <RiHome2Line />
              <h3>Início</h3>
            </ButtonCustomLink>

            <ButtonCustomLink href="">
              <IoSearchSharp />
              <h3>Buscar</h3>
            </ButtonCustomLink>

            <ButtonCustomLink href="">
              <VscLibrary />
              <h3>Sua Biblioteca</h3>
            </ButtonCustomLink>
          </ul>

          <ul>
            <ButtonCustomLink href="">
              <ButtonBackground
                style={{
                  background: "#FFF",
                  marginRight: "5px",
                }}
              >
                <AiOutlinePlus />
              </ButtonBackground>
              <h3>Criar Playlist</h3>
            </ButtonCustomLink>



            <ButtonCustomLink href="" NoAdaptativeOpacity>
              <>
                <ButtonBackground
                  style={{
                    background: "linear-gradient(135deg,#450af5,#c4efd9)",
                    marginRight: "5px",
                  }}
                >
                  <MdFavorite fill="#FFF" />
                </ButtonBackground>
                <h3>Músicas Curtidas</h3>
              </>
            </ButtonCustomLink>
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
