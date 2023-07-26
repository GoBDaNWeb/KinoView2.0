import { useDispatch, useSelector } from "react-redux";

import { hadleOpenBurger } from "@/shared/store/slices/burger/burgerSlice";
import { RootState } from "@/shared/store";

import styles from "./styles.module.sass";

const Burger = () => {
  const dispatch = useDispatch();

  const { burgerIsActive } = useSelector((state: RootState) => state.burger);

  return (
    <div onClick={() => dispatch(hadleOpenBurger())} className={styles.burger}>
      <div className={burgerIsActive ? styles.active : styles.default} />
    </div>
  );
};

export default Burger;
