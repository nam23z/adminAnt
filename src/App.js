import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './container/Dashboard/index';
import ListUser from './container/Users';
import LogIn from './container/Login/Login';
import LayoutPrimary from './component/Layout';
function App() {
  return (
    <Routes>
      <Route element={<LayoutPrimary/>}>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/user' element={<ListUser/>} />
      </Route>
      <Route path='/login' element={<LogIn/>}/>
    </Routes>
  );
}

export default App;
