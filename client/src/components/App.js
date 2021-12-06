import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Classes from './Classes';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <div className="App">
      <NavBar loggedInUser={loggedInUser}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/classes' element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;