import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./style";
import iconeInsta from "../../assets/imgs/icone__insta.svg";
import iconeDiscord from "../../assets/imgs/icon_discod.svg";
import iconeSite from "../../assets/imgs/iconeSiteBranco.svg";
import iconeYoutube from "../../assets/imgs/youtubeIcon.svg";
import iconeTikTok from "../../assets/imgs/iconeTikTok.svg";
import iconeFaceBook from "../../assets/imgs/icone_faceBook.svg";

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="icone__box">
        <a href="https://www.instagram.com/vgbroficial/">
          <img src={iconeInsta} height={"64px"} width={"64px"} alt="" />
        </a>
        <a href="https://discord.gg/vgbr">
          <img src={iconeDiscord} height={"64px"} width={"64px"} alt="" />
        </a>
        <a href="https://velhaguardabrasil.com.br/category/battlefield/">
          <img
            className="icone_site"
            src={iconeSite}
            height={"64px"}
            width={"64px"}
            alt=""
          />
        </a>
        <a href="https://www.youtube.com/channel/UChs1JavfwIWtq6Ufgf6kWcg">
          <img src={iconeYoutube} height={"64px"} width={"64px"} alt="" />
        </a>
        <a href="https://vm.tiktok.com/ZMNG3Nyyw/">
          <img src={iconeTikTok} height={"64px"} width={"64px"} alt="" />
        </a>
        <a href="https://www.facebook.com/Velha-Guarda-Brasil-103179152378656">
          <img src={iconeFaceBook} height={"64px"} width={"64px"} alt="" />
        </a>
      </div>
      <main>
        <div className="Text__box__desktop">
          <h1>Velha Guarda Brasil</h1>
          <h2>Maior clan de BattleField V do Brasil</h2>
        </div>

        <div className="Text__box__mobile">
          <h1>VGBR</h1>
        </div>

        <div className="Link__Box">
          <h2>Conheça o clan</h2>
          <Link className="LinkEntrar" to="/dashboard">
            Entrar
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default Home;
