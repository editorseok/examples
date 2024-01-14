import * as U from './util';

export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`;

export const randomImage = (
  width: number = 1000,
  height: number = 800,
  delta: number = 200,
): string =>
  picsumUrl(U.random(width, width + delta), U.random(height, height + delta));

export const randomAvatar = () => {
  const size = U.random(200, 400);
  return picsumUrl(size, size);
};
