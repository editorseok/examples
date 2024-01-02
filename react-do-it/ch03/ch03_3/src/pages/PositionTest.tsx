import { Title, Div, Icon } from '../components';
import * as D from '../data';

const src = D.randomImage(800, 500);

const PositionTest = () => {
  const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
    <Icon key={name} name={name} className="mr-2" />
  ));

  return (
    <Div>
      <Title>PositionTest</Title>
      <Div
        className="relative border-2 border-gray-500"
        src={src}
        height="10rem">
        <Div
          left="1rem"
          top="1rem"
          className="absolute p-2 text-white bg-red-500">
          {icons}
        </Div>
        <Div
          right="1rem"
          top="1rem"
          className="absolute p-2 text-white bg-red-500">
          {icons}
        </Div>
        <Div
          left="1rem"
          bottom="1rem"
          className="absolute p-2 text-white bg-red-500">
          {icons}
        </Div>
        <Div
          right="1rem"
          bottom="1rem"
          className="absolute p-2 text-white bg-red-500">
          {icons}
        </Div>
      </Div>
    </Div>
  );
};

export default PositionTest;
