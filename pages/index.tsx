import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiHome2Line, RiUser3Line } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { MdFavorite } from "react-icons/md";

import { ButtonCustomLink } from "../components/Buttons/ButtonCustomLink/Index";
import { ButtonRounded } from "../components/Buttons/ButtonRounded/Index";
import { ContainerIcon } from "../components/ContainerIcon/Index";
import { Footer } from "../components/TemplateMain/Footer/Index";

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
              <ContainerIcon background="#FFF">
                <AiOutlinePlus />
              </ContainerIcon>
              <h3>Criar Playlist</h3>
            </ButtonCustomLink>

            <ButtonCustomLink href="" NoAdaptativeOpacity>
              <ContainerIcon background="linear-gradient(135deg,#450af5,#c4efd9)">
                <MdFavorite fill="#FFF" />
              </ContainerIcon>
              <h3>Músicas Curtidas</h3>
            </ButtonCustomLink>
          </ul>
        </nav>

        <main>
          <header>
            <div className={styles.controlls}>
              <ButtonRounded>
                <BsChevronLeft />
              </ButtonRounded>
              <ButtonRounded>
                <BsChevronRight />
              </ButtonRounded>
            </div>
            <div className={styles.contentHeader}></div>

            <div className={styles.infoHeader}>
              <div className={styles.badgeContainer}>
                <div className={styles.avatarUser}>
                  <RiUser3Line fill="#fff" />
                </div>
                <h4 className={styles.nameUser}>Bruno</h4>
                <TiArrowSortedDown fill="#fff" />
              </div>
            </div>
          </header>
        </main>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
