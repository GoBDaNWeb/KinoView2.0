import { useRouter } from "next/router";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Routes } from "@/shared/constants/routes";
import styles from "./styles.module.sass";

const urlList = [
  {
    id: "films",
    label: "Фильмы",
    url: Routes.Films,
    disabled: false,
  },
  {
    id: "serials",
    label: "Сериалы",
    url: Routes.Serials,
    disabled: false,
  },
  {
    id: "cartoons",
    label: "Мультфильмы",
    url: Routes.Cartoons,
    disabled: false,
  },
  {
    id: "anime",
    label: "Аниме",
    url: Routes.Anime,
    disabled: false,
  },
];

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
  console.log(router.query.slug);

  return (
    <header className={`${styles.header} container`}>
      <button className={styles.logoBtn} onClick={() => clickOnLogo()}>
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
      {/* <Button>Войти</Button> */}
    </header>
  );
};

export default Header;
