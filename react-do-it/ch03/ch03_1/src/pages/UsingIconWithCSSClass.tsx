import { Icon } from '../components';

const UsingIconWithCSSClass = () => {
  return (
    <div>
      <h3>UsingIconWithCSSClass</h3>
      <Icon name="home" className="text-blue" />
      <Icon
        name="check_circle_outline"
        className="text-red"
        style={{ fontSize: '50px' }}
      />
    </div>
  );
};

export default UsingIconWithCSSClass;
