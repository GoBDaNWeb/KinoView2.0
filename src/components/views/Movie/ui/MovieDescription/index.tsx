import { FC } from "react";
import { IDescriptionProps } from "../../types/movie.interface";
import styles from "./styles.module.sass";

const MovieDescription: FC<IDescriptionProps> = ({ description }) => {
  return (
    <div className={styles.movieDescription}>
      <p>{description}</p>
    </div>
  );
};

export default MovieDescription;
