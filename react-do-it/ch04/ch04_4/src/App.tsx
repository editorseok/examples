import ClassLifecycle from './pages/ClassLifecycle';
import FetchTest from './pages/FetchTest';
import WindowResizeTest from './pages/WindowResizeTest';

const App = () => {
  return (
    <main>
      <FetchTest />
      <WindowResizeTest />
      <ClassLifecycle />
    </main>
  );
};

export default App;
