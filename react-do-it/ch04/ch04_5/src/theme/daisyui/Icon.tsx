import type { FC } from 'react';
import type { ButtonProps } from './Button';
import type { IconProps as CIconProps } from '../../components';
import { Button } from './Button';
import { Icon as CIcon } from '../../components';

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string;
  };

export const Icon: FC<IconProps> = ({
  name,
  iconClassName,
  className: _className,
  ...buttonProps
}) => {
  const className = ['btn-circle', _className].join(' ');

  return (
    <Button {...buttonProps} className={className}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  );
};
