import { useRouter } from "next/router";
import { useState } from "react";

import { useGetReviewsQuery } from "@/shared/api";

import styles from "./styles.module.sass";

import { Button } from "@/components/ui/Button";
import ReviewItem from "../ReviewItem";

const MovieReviews = () => {
  const [limit, setLimit] = useState<number>(3);

  const {
    query: { id },
  } = useRouter();

  const { data: reviews, isFetching } = useGetReviewsQuery({ id, limit });

  const onLoadMoreReviews = () => {
    setLimit((prev) => prev + 3);
  };
  const onResetReviews = () => {
    setLimit(3);
  };

  const reviewsCondition =
    reviews && reviews.docs.length > 0 && reviews.docs.length < reviews.total;

  return (
    <div className={styles.reviews}>
      <h5>Рецензии</h5>
      <div className={styles.reviewsList}>
        {reviews && reviews.docs?.length > 0 ? (
          <>
            {reviews?.docs.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </>
        ) : (
          <div className={styles.empty}>Рецензий пока что нет</div>
        )}
        <div className={styles.buttons}>
          <Button isDisabled={!reviewsCondition} func={onLoadMoreReviews}>
            {isFetching ? "Загрузка..." : "Показать еще"}
          </Button>
          {reviews && reviews.docs?.length > 3 ? (
            <div className={styles.resetBtn}>
              <Button func={onResetReviews}>Скрыть</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieReviews;
