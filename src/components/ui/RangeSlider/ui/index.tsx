import { FC, memo } from "react";
import Slider from "rc-slider";
import { IRangeSlider } from "../types/rangeSlider.interface";
import "rc-slider/assets/index.css";

const RangeSlider: FC<IRangeSlider> = ({
  min,
  max,
  step,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <div style={{ width: 200 }}>
      <Slider
        min={min}
        max={max}
        step={step}
        range
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default memo(RangeSlider);
