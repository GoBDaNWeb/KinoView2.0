import { useRouter } from "next/router";

import styles from "./styles.module.sass";

import { Button } from "@/components/ui/Button";

const Error = () => {
  const router = useRouter();
  const toMainPage = () => {
    router.push("/");
  };
  return (
    <div className={`${styles.errorPage} container`}>
      <h1>Такой страницы не существует</h1>
      <Button func={toMainPage}>На Главную</Button>
    </div>
  );
};

export default Error;
