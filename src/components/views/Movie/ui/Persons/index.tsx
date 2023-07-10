import { FC } from "react";
import { ISimilarMoviesProps } from "../../types/similarMovies.interface";

import { Carousel } from "@/components/common/Carousel";
import { MovieCard } from "@/components/common/MovieCard";
import { Skeleton } from "@/components/ui/Skeleton";
import { SwiperSlide } from "swiper/react";
import { PersonCard } from "@/components/common/PersonCard";

const Persons: FC<ISimilarMoviesProps> = ({ movieData, isLoading }) => {
  return (
    <Carousel
      quantity={movieData?.persons?.length}
      title="Актерский состав"
      errorText="Актерский состав не найден"
      slidesPerView={7}
      viewQuantity
      contentIsLoading={isLoading}
    >
      {isLoading ? (
        <>
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "140%",
                  width: "100%",
                }}
              />
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          {movieData?.persons.map((person, index) => (
            // Из-за того что в API может приходить по несколько одинаковых обьектов, приходится использоваить индексы вместо айдишников
            <SwiperSlide key={index}>
              <PersonCard
                id={person.id}
                name={person.name}
                photo={person.photo}
              />
            </SwiperSlide>
          ))}
        </>
      )}
    </Carousel>
  );
};

export default Persons;
