import { useGetMovieByIdQuery, useGetMovieImageQuery } from "@/api";
import { useRouter } from "next/router";
import Head from "next/head";
import { Movie } from "@/components/views/Movie";
import { Header } from "@/components/layout/Header";
import { store, wrapper } from "@/store";
import { getRunningQueriesThunk } from "@/api";
import { Footer } from "@/components/layout/Footer";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const MoviePage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: movie } = useGetMovieByIdQuery(id);

  return (
    <>
      <Head>
        <title>KinoView {movie && `- ${movie.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Movie />
      <Footer />
    </>
  );
};

export default MoviePage;
