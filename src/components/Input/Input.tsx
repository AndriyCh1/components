import { FC, InputHTMLAttributes } from "react";

import css from "./Input.module.css";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: FC<IProps> = (props) => {
  const { label, className, ...attributes } = props;

  const inputAttributes = {
    ...attributes,
    className: [className, css.input].join(" "),
  };

  return (
    <div>
      {label && <label className={css.label}>{label}</label>}
      <input {...inputAttributes} />
    </div>
  );
};
