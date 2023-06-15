import { FC } from "react";

import { IFilterComponentsProps } from "./../../types/filters.interface";

import styles from "./styles.module.sass";

import { RangeSlider } from "@/components/ui/RangeSlider";

const Years: FC<IFilterComponentsProps> = ({ value, onChange }) => {
  return (
    <div className={styles.yearFilter}>
      <h5>Год</h5>
      <div className={styles.inputs}>
        <input
          type="number"
          placeholder="От"
          min={1960}
          max={2023}
          value={value && value[0]}
          // @ts-ignore
          onChange={(e) => onChange([e.target.value, value[1]])}
        />
        <span>-</span>
        <input
          type="number"
          placeholder="До"
          min={1960}
          max={2023}
          value={value && value[1]}
          // @ts-ignore
          onChange={(e) => onChange([value[0], e.target.value])}
        />
      </div>
      <RangeSlider
        min={1960}
        max={2023}
        step={1}
        defaultValue={[1960, 2023]}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Years;
