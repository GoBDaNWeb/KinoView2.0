import styles from "./styles.module.sass";

const Person = () => {
  return (
    <div className={styles.person}>
      {/* <div className={styles.mainInfo}>
        <img src={data?.photo} alt="person" />
        <div className={styles.info}>
          <h3 className={styles.name}>{data?.name}</h3>
          <h5 className={styles.nameEng}>{data?.enName}</h5>
          <>
            <h4 className={styles.aboutPersonTitle}>О Персоне</h4>
            <Info aboutPerson={aboutPerson} />
          </>
        </div>
      </div>
      <Carousel title="Фильмы" type="films" quantity={data?.movies.length}>
        {personMovies &&
          personMovies.docs.map((movie) => (
            <SwiperSlide key={movie.id}>
              <SimilarMovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Carousel> */}
    </div>
  );
};

export default Person;
