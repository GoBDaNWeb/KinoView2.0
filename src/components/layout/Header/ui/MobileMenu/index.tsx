import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { urlList } from "@/shared/data/routes";

import styles from "./styles.module.sass";

const MobileMenu = () => {
  const { query } = useRouter();
  const { burgerIsActive } = useSelector((state: RootState) => state.burger);
  return (
    <div
      className={`${styles.menuDefault} ${burgerIsActive ? styles.active : ""}`}
    >
      <ul className={styles.nav}>
        {urlList.map((url) => (
          <li
            className={query.slug?.includes(url.id) ? `${styles.active}` : ""}
            key={url.id}
          >
            <Link href={url.url}>{url.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
