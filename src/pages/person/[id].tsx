import { useGetMovieByIdQuery, useGetMovieImageQuery } from "@/api";
import { useRouter } from "next/router";
import { useGetPersonByIdQuery } from "@/api";
import Head from "next/head";
import { Movie } from "@/components/views/Movie";
import { Header } from "@/components/layout/Header";
import { store, wrapper } from "@/store";
import { getRunningQueriesThunk } from "@/api";
import { Footer } from "@/components/layout/Footer";
import { Person } from "@/components/views/Person";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const PersonPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: person, isLoading } = useGetPersonByIdQuery(id);

  return (
    <>
      <Head>
        <title>KinoView {person && `- ${person?.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Person person={person} isLoading={isLoading} />
      {/* <Footer /> */}
    </>
  );
};

export default PersonPage;
