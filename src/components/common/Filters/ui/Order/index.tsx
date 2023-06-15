import { FC } from "react";
import { IFilterComponentsProps } from "./../../types/filters.interface";

import styles from "./styles.module.sass";

import { Select } from "@/components/ui/Select";

const order = [
  { label: "По убыванию", value: "-1" },
  { label: "По возрастанию", value: "1" },
];

const Order: FC<IFilterComponentsProps> = ({ onChange }) => {
  return (
    <div className={styles.orderFilter}>
      <h5>Порядок</h5>
      <Select options={order} onChange={onChange} />
    </div>
  );
};

export default Order;
