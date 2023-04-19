import "@/styles/index.sass";
import { useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";
import { wrapper } from "@/store";
import { useEffect } from "react";
import useTheme from "@/shared/hooks/useTheme";
import { Preloader } from "@/components/ui/Preloader";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  // const { setTheme } = useTheme();

  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    // const theme = localStorage.getItem("theme") || "dark";
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    // setTheme(theme);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default wrapper.withRedux(App);
