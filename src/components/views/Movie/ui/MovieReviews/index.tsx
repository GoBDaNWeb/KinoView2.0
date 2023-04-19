import { useGetReviewsQuery } from "@/api";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import ReviewItem from "../ReviewItem";
import styles from "./styles.module.sass";

const MovieReviews = () => {
  const [limit, setLimit] = useState(3);

  const {
    query: { id },
  } = useRouter();
  const { data: reviews, isFetching } = useGetReviewsQuery({ id, limit });
  const onLoadMoreReviews = () => {
    setLimit((prev) => prev + 3);
  };
  console.log("asd");

  return (
    <div className={styles.reviews}>
      <h5>Рецензии</h5>
      <div className={styles.reviewsList}>
        {reviews && reviews.docs?.length > 0 ? (
          <>
            {reviews?.docs.map((review: any) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </>
        ) : (
          <div className={styles.empty}>Рецензий пока что нет</div>
        )}
        {reviews && reviews.docs?.length > 0 && (
          <Button func={onLoadMoreReviews}>
            {isFetching ? "Загрузка..." : "Показать еще"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieReviews;
