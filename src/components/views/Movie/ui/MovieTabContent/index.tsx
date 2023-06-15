import { FC } from "react";
import Carousel from "@/components/common/Carousel/ui";
import { SwiperSlide } from "swiper/react";
import { MovieCard } from "@/components/common/MovieCard";
import MovieImages from "../MovieImages";
import MovieDescription from "../MovieDescription";
import { useRouter } from "next/router";
import { useGetMovieByIdQuery } from "@/api";
import { Tabs } from "@/components/ui/Tabs";
import MovieFacts from "../MovieFacts";

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
