import { useCallback, useMemo, useState } from 'react';
import { Div, Icon, Title } from '../components';
import * as D from '../data';

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]);
  const addImage = useCallback(
    () => setImages(images => [D.randomImage(100, 100, 50), ...images]),
    [],
  );
  const clearImages = useCallback(() => setImages(_ => []), []);
  const children = useMemo(
    () =>
      images.map((image, index) => (
        <Div
          key={index}
          src={image}
          className="w-1/5 p-2 bg-cover"
          height="10rem"
          minHeight="10rem"
        />
      )),
    [images],
  );

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div className="tooltip">
          <Icon
            name="add"
            onClick={addImage}
            className="mr-12 btn btn-primary"
          />
        </div>
        <div className="tooltip">
          <Icon
            name="clear_all"
            onClick={clearImages}
            className="mr-12 btn btn-primary"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  );
}
