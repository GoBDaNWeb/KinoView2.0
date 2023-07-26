import Image from "next/image";
import { useRouter } from "next/router";
import LightGallery from "lightgallery/react";

import { useGetMovieImageQuery } from "@/shared/api";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
import styles from "./styles.module.sass";

import { Skeleton } from "@/components/ui/Skeleton";

const MovieImages = () => {
  const {
    query: { id },
  } = useRouter();

  const { data: movieImages, isLoading } = useGetMovieImageQuery({
    id,
    limit: 10,
  });

  return (
    <div className={styles.movieImages}>
      <LightGallery
        plugins={[lgZoom]}
        download={false}
        elementClassNames={styles.wrapper}
        speed={500}
      >
        {isLoading ? (
          <>
            {[...Array(10)].map((_, index: number) => (
              <Skeleton
                customStyles={{
                  height: "auto",
                  paddingBottom: "60%",
                  width: "100%",
                }}
                key={index}
              />
            ))}
          </>
        ) : (
          <>
            {movieImages?.docs.map((image, index: number) => {
              return (
                <a
                  className={styles.imageWrapper}
                  key={index}
                  data-src={image.url}
                  href={image.url}
                >
                  <Image fill className={styles.image} src={image.url} alt="" />
                </a>
              );
            })}
          </>
        )}
      </LightGallery>
    </div>
  );
};

export default MovieImages;
