import { FC, useState, memo } from "react";
import { IPersonCardProps } from "../types/personCard.interface";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.sass";

const PersonCard: FC<IPersonCardProps> = ({ id, name, photo }) => {
  return (
    <Link href={`/person/${id}`} className={styles.personCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={photo ? photo : "/image-not-found.jpg"}
          fill
          alt="person"
          sizes="100%"
        />
      </div>
      <h6 className={styles.personName}>{name}</h6>
    </Link>
  );
};

export default memo(PersonCard);
