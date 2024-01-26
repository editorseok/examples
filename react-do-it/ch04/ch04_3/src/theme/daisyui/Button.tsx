import type {
  FC,
  PropsWithChildren,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

export type ReactButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ReactButtonProps & {};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className: _className,
  ...buttonProps
}) => {
  const className = [_className, 'btn'].join(' ');

  return <button className={className} {...buttonProps} />;
};
