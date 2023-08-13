import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FC } from "react";

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
};
