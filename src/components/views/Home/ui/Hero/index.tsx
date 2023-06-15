import styles from "./styles.module.sass";

import Search from "../Search";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <video preload="auto" autoPlay muted loop className={styles.video}>
        <source type="video/mp4" src="video-hero.mp4" />
      </video>
      <div className={styles.backdrop}></div>
      <div className={styles.heroContent}>
        <h1>Вселенная кино безгранична</h1>
        <h4>Найди Кино или Сериал для просмотра</h4>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
