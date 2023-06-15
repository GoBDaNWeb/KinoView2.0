import styles from "./styles.module.sass";

import Hero from "../Hero";
import NewFilms from "../NewFilms";
import NewSerials from "../NewSerials";
import NewCartoons from "../NewCartoons";
import NewAnime from "../NewAnime";
import Trailers from "../Banners";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div id="home-content" className={styles.homeContent}>
        <Trailers />
        <NewFilms />
        <NewSerials />
        <NewCartoons />
        <NewAnime />
      </div>
    </div>
  );
};

export default Home;
