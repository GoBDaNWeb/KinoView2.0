import { FC } from "react";
import { IPersonProps } from "../../types/person.interface";
import Image from "next/image";
import styles from "./styles.module.sass";
import { Skeleton } from "@/components/ui/Skeleton";
import PersonInfo from "../PersonInfo";
import PersonFilms from "../PersonFilms";

const Person: FC<IPersonProps> = ({ person, isLoading }) => {
  const aboutPerson = {
    career: person?.profession,
    sex: person?.sex,
    growth: person?.growth,
    birthday: person?.birthday,
    death: person?.death,
    totalMovies: person?.movies.length,
    spouses: person?.spouses,
  };
  console.log("====================================");
  console.log(person);
  console.log("====================================");
  return (
    <div className={`${styles.person} container`}>
      <div className={styles.mainInfo}>
        <div className={styles.imageWrapper}>
          {!person ? (
            <Skeleton
              customStyles={{
                width: " 100%",
                aspectRatio: ".75",
                minWidth: "288px",
              }}
            />
          ) : (
            <Image
              src={person.photo ? person.photo : "/image-not-found.jpg"}
              alt="movie"
              fill
            />
          )}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{person?.name}</h3>
          <h5 className={styles.nameEng}>{person?.enName}</h5>
          <>
            <h4 className={styles.aboutPersonTitle}>О Персоне</h4>
            <PersonInfo aboutPerson={aboutPerson} />
          </>
        </div>
      </div>
      <PersonFilms movieData={person?.movies} isLoading={isLoading} />
    </div>
  );
};

export default Person;
