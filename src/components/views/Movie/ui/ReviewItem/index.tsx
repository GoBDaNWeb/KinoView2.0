import { FC, useState } from "react";
import { IReviewItemProps } from "../../types/movie.interface";
import styles from "./styles.module.sass";
import { convertDate } from "../../helpers/convertDate";
import { Button } from "@/components/ui/Button";

const Reviews: FC<IReviewItemProps> = ({ review }) => {
  const { date } = review;

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

      <div className={styles.reviewBottom}>
        <span className={styles.date}>{convertDate(date, "D MMMM YYYY")}</span>
        <Button func={() => setIsTruncated((prev) => !prev)}>
          {isTruncated ? "показать полностью" : "скрыть"}
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
