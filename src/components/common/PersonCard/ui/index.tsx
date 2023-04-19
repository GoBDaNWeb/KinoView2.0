import { FC } from "react";
import { IPersonCardProps } from "../types/personCard.interface";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.sass";
const PersonCard: FC<IPersonCardProps> = ({ name, photo }) => {
  return (
    <Link href={"/"} className={styles.personCard}>
      <div className={styles.imageWrapper}>
        {photo ? (
          <Image src={photo} fill alt="person" />
        ) : (
          <Image src="/image-not-found.jpg" fill alt="person" />
        )}
      </div>
      <h6 className={styles.personName}>{name}</h6>
    </Link>
  );
};

export default PersonCard;
