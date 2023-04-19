import Head from "next/head";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SerialsPage = () => {
  return (
    <>
      <Head>
        <title>KinoView - Сериалы</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>FilmsPage</div>
      <Footer />
    </>
  );
};

export default SerialsPage;
