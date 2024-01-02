import { Title, Div, Subtitle } from '../components';
import * as D from '../data';

const src = D.randomImage(1200, 400);

const BackgroundImageTest = () => {
  return (
    <section className="mt-4">
      <Title>BackgroundImageTest</Title>
      <Div className="mt-4 bg-gray-100 bg-cover h-80" src={src}>
        <Subtitle className="text-gray-500 border-4 border-black border-solid rounded-2xl">
          Some Text here
        </Subtitle>
      </Div>
    </section>
  );
};

export default BackgroundImageTest;
