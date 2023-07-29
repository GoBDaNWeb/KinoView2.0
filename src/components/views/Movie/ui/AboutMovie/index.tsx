import { FC, Fragment } from "react";
import moment from "moment";

import { IAboutMovieProps } from "../../types/movie.interface";

import { convertFees } from "../../helpers/convertFees";
import { convertMovieType } from "../../helpers/converMovieType";

import styles from "./styles.module.sass";

import { Skeleton } from "@/components/ui/Skeleton";
import { InfoBlock } from "@/components/common/InfoBlock";
import { Badge } from "@/components/ui/Badge";

const AboutMovie: FC<IAboutMovieProps> = ({ aboutMovieData }) => {
  const {
    year,
    countries,
    genres,
    slogan,
    fees,
    type,
    premiere,
    movieLength,
    budget,
    ageRating,
  } = aboutMovieData;

  const info = [
    { title: "Год производства", content: <>{year ? year : "-"}</> },
    {
      title: "Страна",
      content: (
        <>
          {countries
            ? countries.map((country, index: number) => (
                <Fragment key={country.name}>
                  {index ? ", " : ""}
                  {country.name}
                </Fragment>
              ))
            : "-"}
        </>
      ),
    },

    {
      title: "Жанр",
      content: (
        <>
          {genres
            ? genres.map((genre, index: number) => (
                <Fragment key={genre.name}>
                  {index ? ", " : ""}
                  {genre.name}
                </Fragment>
              ))
            : "-"}
        </>
      ),
    },
    {
      title: "Слоган",
      content: <>{slogan ? slogan : "-"}</>,
    },
    {
      title: "Бюджет",
      content: <>{budget?.value ? `$${convertFees(budget.value)}` : "-"}</>,
    },
    {
      title: "Возраст",
      content: <>{ageRating ? <Badge>{ageRating}+</Badge> : "-"}</>,
    },
    {
      title: "Время",
      content: <>{movieLength ? `${movieLength} мин` : "-"} </>,
    },
    {
      title: "Сборы в мире",
      content: <>{fees?.value ? `$${convertFees(fees.value)}` : "-"}</>,
    },
    {
      title: "Премьера в мире",
      content: <>{moment(premiere?.world).format("DD.MM.YYYY")}</>,
    },
  ];

  console.log("budget", budget);

  return (
    <div className={styles.movieAboutList}>
      <h4>
        {!type ? (
          <Skeleton customStyles={{ width: "100px", height: "20px" }} />
        ) : (
          <>О {convertMovieType(type)}</>
        )}{" "}
      </h4>
      <InfoBlock infoContent={info} />
    </div>
  );
};

export default AboutMovie;
