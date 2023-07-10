import { FC } from "react";
import { IPersonProps } from "../../types/person.interface";
import { useGetMoviesByIdQuery } from "@/api";

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
  const countFilms = Number(person?.movies?.length) - 1;
  const query = person?.movies
    ?.map((el) => `search=${el.id}&field=id`)
    .join("&");
  const { data: personMovies } = useGetMoviesByIdQuery({
    query,
    limit: countFilms + 1,
  });

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
              sizes="100%"
            />
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.aboutMain}>
            <h3 className={styles.name}>
              {!person?.name ? (
                <Skeleton customStyles={{ height: "22px", width: "200px" }} />
              ) : (
                <>{person?.name}</>
              )}
            </h3>
            <h5 className={styles.nameEng}>
              {!person?.enName ? (
                <Skeleton customStyles={{ height: "22px", width: "100px" }} />
              ) : (
                <>{person?.enName}</>
              )}
            </h5>
          </div>

          <PersonInfo aboutPerson={aboutPerson} />
        </div>
      </div>
      <PersonFilms movieData={personMovies} isLoading={isLoading} />
    </div>
  );
};

export default Person;
