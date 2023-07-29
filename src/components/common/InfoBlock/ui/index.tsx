import { FC } from "react";
import { IInfoBlockProps } from "../types/infoBlock.interface";

import styles from "./styles.module.sass";

const InfoBlock: FC<IInfoBlockProps> = ({ infoContent }) => {
  console.log("infoContent", infoContent);

  return (
    <ul className={styles.infoBlock}>
      {infoContent.map((info, index) => (
        <li key={index}>
          <h5>{info.title}</h5>
          <span>{info.content}</span>
        </li>
      ))}
    </ul>
  );
};

export default InfoBlock;
