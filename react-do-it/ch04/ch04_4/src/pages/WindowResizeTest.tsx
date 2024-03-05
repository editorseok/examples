import { Subtitle, Title } from '../components';
import { useWindowResize } from '../hooks';

const WindowResizeTest = () => {
  const [width, height] = useWindowResize();

  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <Subtitle className="m-4">
        width: {width}, height: {height}
      </Subtitle>
    </section>
  );
};

export default WindowResizeTest;
