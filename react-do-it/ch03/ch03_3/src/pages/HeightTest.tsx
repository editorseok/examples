import { Title, Div } from '../components';

const HeightTest = () => {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <Div className="h-40 mt-4 text-center bg-blue-500">
        <Div className="bg-blue-500 h-1/2">
          <p className="text-center text-red-50">h-1/2</p>
        </Div>
        <Div className="h-20 bg-blue-500">
          <p className="text-center text-red-50">h-20</p>
        </Div>
      </Div>
    </section>
  );
};

export default HeightTest;
