import { FC } from "react";
import Carousel from "@/components/common/Carousel/ui";
import { SwiperSlide } from "swiper/react";
import { MovieCard } from "@/components/common/MovieCard";
import { PersonCard } from "@/components/common/PersonCard";
import MovieImages from "../MovieImages";
import MovieDescription from "../MovieDescription";
import { IMovieProps } from "../../types/movie.interface";
import { useRouter } from "next/router";
import { useGetMovieByIdQuery } from "@/api";
import { Tabs } from "@/components/ui/Tabs";
import MovieFacts from "../MovieFacts";
import MovieReviews from "../MovieReviews";
import styles from "./styles.module.sass";

const MovieTabContent = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: movieData } = useGetMovieByIdQuery(id);
  const TabsData = [
    {
      title: "Описание",
      content: <MovieDescription description={movieData?.description} />,
      condition: movieData?.description,
    },
    {
      title: "Актеры",
      content: (
        <Carousel
          quantity={movieData?.persons?.length}
          title="Актерский состав"
          errorText="Актерский состав не найден"
          slidesPerView={7}
          viewQuantity
        >
          {movieData?.persons.map((person: any) => (
            <SwiperSlide key={person.id}>
              <PersonCard name={person.name} photo={person.photo} />
            </SwiperSlide>
          ))}
        </Carousel>
      ),
      condition: movieData?.persons?.length > 0,
    },
    {
      title: "Факты",
      content: <MovieFacts facts={movieData?.facts} />,
      condition: true,
    },
    {
      title: "Изображения",
      content: <MovieImages />,
      condition: true,
    },
  ];
  return <Tabs tabs={TabsData} />;
};

export default MovieTabContent;
