export const makeClassName = (
  setting: string,
  _className?: string,
  numberOfLines?: number,
) =>
  [
    setting,
    _className,
    numberOfLines ? `line-clamp-${numberOfLines}` : '',
  ].join(' ');
