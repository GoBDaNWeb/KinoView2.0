import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.sass";

const Badge: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
