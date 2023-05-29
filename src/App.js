import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/index';
import ListUser from './container/Users';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/user' element={<ListUser/>} />
    </Routes>
  );
}

export default App;
