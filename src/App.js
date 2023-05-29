import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/index';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/*' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
