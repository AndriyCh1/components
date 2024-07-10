import { FC, SelectHTMLAttributes } from "react";
import css from "./Select.module.css";

export interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: FC<IProps> = (props) => {
  const { children, className, ...attributes } = props;

  const selectAttributes = {
    ...attributes,
    className: [className, css.select].join(" "),
  };

  return <select {...selectAttributes}>{children}</select>;
};
