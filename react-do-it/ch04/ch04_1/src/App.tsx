import { useClock } from './hooks';
import { Clock } from './pages/Clock';

const App = () => {
  const clock = useClock();
  return <Clock today={clock} />;
};

export default App;
