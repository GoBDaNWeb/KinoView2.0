import { FC } from "react";
import { IFactsProps } from "../../types/movie.interface";
import styles from "./styles.module.sass";

const MovieFacts: FC<IFactsProps> = ({ facts }) => {
  return (
    <div className={styles.facts}>
      <ul className={styles.factsList}>
        {facts && facts?.length > 0 ? (
          <>
            {facts?.map((fact) => (
              <li
                key={fact.value}
                className={styles.item}
                dangerouslySetInnerHTML={{ __html: fact.value }}
              />
            ))}
          </>
        ) : (
          <div className={styles.empty}>Фактов нет</div>
        )}
      </ul>
    </div>
  );
};

export default MovieFacts;
