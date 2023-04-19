import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useGetReviewsQuery } from "@/api";
import { IReviewItemProps } from "../../types/movie.interface";
import styles from "./styles.module.sass";

const Reviews: FC<IReviewItemProps> = ({ review }) => {
  const [isFullReview, setIsFullReview] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const reviewcondition =
    review.type === "Негативный"
      ? styles.badReview
      : review.type === "Позитивный"
      ? styles.goodReview
      : "";

  return (
    <div className={`${styles.review} ${reviewcondition}`}>
      <div className={styles.reviewContent}>
        <h5>{review.title}</h5>
        <p
          dangerouslySetInnerHTML={{ __html: review.review }}
          className={isTruncated ? `${styles.truncated}` : ""}
        ></p>
      </div>

      <div className={styles.reviewBottom}></div>
    </div>
  );
};

export default Reviews;
