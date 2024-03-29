import { Title } from '../components';
import * as D from '../data';

const MarginTest = () => {
  const boxes = D.makeArray(10).map((_, index) => (
    <div key={index} className="inline-block w-8 h-8 m-4 bg-pink-300" />
  ));

  return (
    <section className="mt-4">
      <Title>MarginTest</Title>
      <div className="p-4 bg-blue-700">{boxes}</div>
    </section>
  );
};

export default MarginTest;
