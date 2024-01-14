import { Title, Div, Icon, Overlay } from '../components';

const OverlayTest = () => {
  return (
    <section className="mt-4">
      <Title>OverlayTest</Title>
      <Overlay opacityClass="bg-black/70">
        <Div className="relative flex items-center justify-center p-8 bg-white h-1/2">
          <Div className="absolute" top="1rem" right="1rem">
            <Icon name="close" className="text-gray-500" />
          </Div>
        </Div>
        <p className="text-5xl">modal dialog box</p>
      </Overlay>
    </section>
  );
};

export default OverlayTest;
