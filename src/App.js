// My Views
import Main from './views/Main/Main';

// Third Party - React Router
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default App;
