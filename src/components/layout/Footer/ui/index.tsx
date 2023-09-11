import { Logo } from "@/components/ui/Logo";
import styles from "./styles.module.sass";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <Logo />
      <a
        href="https://portfolio-bogdan.vercel.app"
        target="_blank"
        className={styles.copyRight}
      >
        Made by <span>Bogdan Ognistiy</span>
      </a>
    </footer>
  );
};

export default Footer;
