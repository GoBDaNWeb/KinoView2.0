import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

import { useGetMovieByIdQuery, useGetMovieImageQuery } from "@/shared/api";
import { convertRating } from "@/shared/helpers/convertRating";
import { ratingColor } from "@/shared/helpers/ratingColor";

import styles from "./styles.module.sass";

import { Skeleton } from "@/components/ui/Skeleton";

const BannersItem = ({ id }: { id: string }) => {
  const router = useRouter();

  const { data: movie } = useGetMovieByIdQuery(id);
  const { data: image } = useGetMovieImageQuery({ id, limit: 1 });

  return (
    <div
      onClick={() => router.push(`/movie/${id}`)}
      className={styles.trailersItem}
    >
      {!image?.docs[0].url ? (
        <Skeleton
          customStyles={{
            height: "auto",
            aspectRatio: "1.6",
            width: "100%",
            borderRadius: "1.5rem",
          }}
        />
      ) : (
        <div className={styles.imageWrapper}>
          <Image
            src={movie?.backdrop.url ? movie?.backdrop.url : image.docs[0].url}
            alt="movie"
            fill
            sizes="100%"
          />
          <div className={styles.imageWrapperContent}>
            <div className={styles.contentTop}>
              <h5>{movie?.name}</h5>
            </div>
            <div className={styles.contentBottom}>
              <div
                className={`${styles.rating} ${ratingColor(movie?.rating?.kp)}`}
              >
                {convertRating(movie?.rating?.kp)}
              </div>
              <h6>{movie?.year}</h6>
              <h6>{movie?.genres[0].name}</h6>
            </div>
          </div>
        </div>
      )}

      <div className={styles.bottomLine}></div>
    </div>
  );
};

export default BannersItem;
