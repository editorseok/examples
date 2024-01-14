import { Title } from '../components';
import * as D from '../data';

const src = D.randomImage(3000, 1600);

const ImageTest = () => {
  return (
    <section className="mt-4">
      <Title>ImageTest</Title>
      <img src={src} className="bg-gray-300" width="400" height="400" />
    </section>
  );
};

export default ImageTest;
