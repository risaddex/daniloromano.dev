import React, { ReactNode } from 'react';
import {
  ButtonBack,
  ButtonFront,
  IButtonBackProps,
  IButtonFrontProps,
} from './index';

type GlobalButtonProps = Partial<
  IButtonBackProps & IButtonFrontProps
> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
};

const Button = (props: GlobalButtonProps) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
