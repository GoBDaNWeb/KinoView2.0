import { FC } from "react";
import { IAboutMovieProps } from "../../types/movie.interface";
import { convertFees } from "../../helpers/convertFees";
import { convertMovieType } from "../../helpers/converMovieType";
import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./styles.module.sass";

const AboutMovie: FC<IAboutMovieProps> = ({ aboutMovieData }) => {
  const { year, countries, genres, slogan, fees, type } = aboutMovieData;

  return (
    <>
      <h4>
        {!type ? (
          <Skeleton customStyles={{ width: "100px", height: "20px" }} />
        ) : (
          <>О {convertMovieType(type)}</>
        )}{" "}
      </h4>
      <ul className={styles.movieAboutList}>
        <li>
          <h5>Год производства</h5>
          <span>{year ? year : "-"}</span>
        </li>
        <li>
          <h5>Страна</h5>
          <span>
            {countries
              ? countries.map((country: any, index: number) => (
                  <span key={country}>
                    {index ? ", " : ""}
                    {country.name}
                  </span>
                ))
              : "-"}
          </span>
        </li>
        <li>
          <h5>Жанр</h5>
          <span>
            {genres
              ? genres.map((genre: any, index: number) => (
                  <span key={genre.name}>
                    {index ? ", " : ""}
                    {genre.name}
                  </span>
                ))
              : "-"}
          </span>
        </li>
        <li>
          <h5>Слоган</h5>
          <span>{slogan ? slogan : "-"}</span>
        </li>
        <li>
          <h5>Сборы в мире</h5>
          <span>{fees?.value ? `$${convertFees(fees.value)}` : "-"}</span>
        </li>
        <li>
          <h5>Премьера в мире</h5>
          <span>-</span>
        </li>
      </ul>
    </>
  );
};

export default AboutMovie;
