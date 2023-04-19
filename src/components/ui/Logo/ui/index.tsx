import { RiMovie2Line } from "react-icons/ri";
import styles from "./styles.module.sass";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <RiMovie2Line className={styles.logoIcon} />
      <div className={styles.logoText}>
        Kino
        <span>View</span>
      </div>
    </div>
  );
};

export default Logo;
