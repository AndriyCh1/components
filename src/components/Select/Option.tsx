import { FC, OptionHTMLAttributes } from "react";

import css from "./Option.module.css";

export interface IProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export const Option: FC<IProps> = (props) => {
  const { children, className, ...attributes } = props;

  const optionAttributes = {
    ...attributes,
    className: [className, css.option].join(" "),
  };

  return <option {...optionAttributes}>{children}</option>;
};
