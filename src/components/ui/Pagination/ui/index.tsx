import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPaginationProps } from "../types/pagination.interface";

import styles from "./styles.module.sass";

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "../../Button";
import { RootState } from "@/store";
import { setPage } from "@/store/slices/pagination/paginationSlice";
import { Skeleton } from "../../Skeleton";

const Pagination: FC<IPaginationProps> = ({ totalPages }) => {
  const dispatch = useDispatch();

  const { page } = useSelector((state: RootState) => state.pagination);

  if (!totalPages) {
    return <Skeleton customStyles={{ height: "20px", width: "30%" }} />;
  }

  const previosPages = () => {
    if (page === 5) {
      return [page - 2, page - 1];
    }
    if (page === 4) {
      return [page - 2, page - 1];
    }
    if (page === 2) {
      return [page - 1];
    }
    if (page === totalPages) {
      return [page - 3, page - 2, page - 1];
    }
    if (page === totalPages - 1) {
      return [page - 2, page - 1];
    }
    if (page === totalPages - 2) {
      return [page - 1];
    } else {
      return [page - 2, page - 1];
    }
  };

  const nextPages = () => {
    if (page === 1) {
      return [page + 1, page + 2, page + 3];
    }
    if (page === 2) {
      return [page + 1, page + 2];
    }
    if (page === 3) {
      return [page + 1, page + 2];
    }
    if (page === totalPages) {
      return [];
    }
    if (page === totalPages - 1) {
      return [page + 1];
    }
    if (page === totalPages - 2) {
      return [page + 1, page + 2];
    }
    if (page === totalPages - 3) {
      return [page + 1];
    }
    if (page === totalPages - 4) {
      return [page + 1, page + 2];
    }
    if (page === totalPages - 5) {
      return [page + 1, page + 2, page + 3];
    } else {
      return [page + 1, page + 2];
    }
  };

  const handleChangePage = (selectedPage: number) => {
    dispatch(setPage(selectedPage));
  };

  return (
    <div className={styles.pagination}>
      <Button
        customStyles={{ marginRight: "2rem" }}
        isDisabled={page === 1}
        func={() => handleChangePage(page - 1)}
      >
        <MdNavigateBefore />
      </Button>
      <ul className={styles.pages}>
        {page > 3 && (
          <li key={page}>
            <button onClick={() => handleChangePage(1)}>1</button>
          </li>
        )}
        {page >= 2 &&
          previosPages().map((page) => (
            <li key={page}>
              <button onClick={() => handleChangePage(page)}>{page}</button>
            </li>
          ))}
        <li>
          <button className={styles.currentPage}>{page}</button>
        </li>
        {nextPages().map((page) => (
          <li key={page}>
            <button onClick={() => handleChangePage(page)}>{page}</button>
          </li>
        ))}
        {page < totalPages - 5 ? (
          <>
            <li key={page}>
              <button onClick={() => handleChangePage(totalPages)}>
                {totalPages}
              </button>
            </li>
          </>
        ) : null}
      </ul>
      <Button
        customStyles={{ marginLeft: "2rem" }}
        isDisabled={page === totalPages}
        func={() => handleChangePage(page + 1)}
      >
        <MdNavigateNext />
      </Button>
    </div>
  );
};

export default Pagination;
