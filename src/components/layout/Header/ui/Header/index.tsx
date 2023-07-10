import { useRouter } from "next/router";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Routes } from "@/shared/constants/routes";
import styles from "./styles.module.sass";

import { Burger } from "@/components/ui/Burger";
import MobileMenu from "../MobileMenu";

import { urlList } from "@/shared/data/routes";

const Header = () => {
  const router = useRouter();

  const clickOnLogo = () => {
    if (router.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header className={`${styles.header} container`}>
        <button className={styles.logoBtn} onClick={clickOnLogo}>
          <Logo />
        </button>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            {urlList.map((url) => (
              <li
                className={
                  router.query.slug?.includes(url.id) ? `${styles.active}` : ""
                }
                key={url.id}
              >
                <Link href={url.url}>{url.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Burger />
        {/* <Button>Войти</Button> */}
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;
