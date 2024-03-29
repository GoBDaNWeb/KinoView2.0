import { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import { wrapper } from "@/shared/store";

import "nprogress/nprogress.css";
import "@/styles/index.sass";
import { withLayout } from "@/shared/providers";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);
    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default wrapper.withRedux(withLayout(App));
