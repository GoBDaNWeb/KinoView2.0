import Hero from "../Hero";
import BestFilms from "../BestFilms";
import NewFilms from "../NewFilms";
import NewSerials from "../NewSerials";
import NewCartoons from "../NewCartoons";
import NewAnime from "../NewAnime";

import styles from "./styles.module.sass";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <div id="home-content" className={`${styles.homeContent} container`}>
        <BestFilms />
        <NewFilms />
        <NewSerials />
        <NewCartoons />
        <NewAnime />
      </div>
    </div>
  );
};

export default Home;
