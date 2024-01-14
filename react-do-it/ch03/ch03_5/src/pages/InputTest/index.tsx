import Basic from './Basic';
import Border from './Border';
import Color from './Color';
import Size from './Size';

const inputTest = () => {
  return (
    <section>
      <h2 className="text-5xl font-bold text-center">inputTest</h2>
      <div className="mt-4">
        <Size />
        <Border />
        <Color />
        <Basic />
      </div>
    </section>
  );
};

export default inputTest;
