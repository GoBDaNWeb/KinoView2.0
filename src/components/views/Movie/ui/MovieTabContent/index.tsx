import { useRouter } from "next/router";

import { useGetMovieByIdQuery } from "@/shared/api";

import MovieImages from "../MovieImages";
import MovieDescription from "../MovieDescription";
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
