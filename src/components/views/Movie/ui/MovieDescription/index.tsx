import { FC } from "react";
import { IDescriptionProps } from "../../types/movie.interface";
import styles from "./styles.module.sass";

const MovieDescription: FC<IDescriptionProps> = ({ description }) => {
  return (
    <div className={styles.movieDescription}>
      <h3>Описание</h3>
      <p>{description}</p>
    </div>
  );
};

export default MovieDescription;
