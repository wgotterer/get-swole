import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useState ,useEffect} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Classes from './Classes';
import PrivateClasses from './PrivateClasses';
import Profile from './Profile';
import PageTrainer from './PageTrainer';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({});
  const [classToDisplay, setClassToDisplay] = useState(undefined);
  

  useEffect(() => {
    fetch('/me')
    .then(response => {
      if (response.ok) {
        response.json()
        .then(user => {
          setUser(user);
          setLoggedInUser(true);
        });
      }
    });
  }, []);
    
  return (
    <div className="App">
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} setUser={setUser}/>}/>
        {loggedInUser ? <>
          <Route path='/dashboard' element={<Dashboard loggedInUser={loggedInUser} user={user} classToDisplay={classToDisplay} setClassToDisplay={setClassToDisplay}/>} />
          <Route path='/classes' element={<Classes loggedInUser={loggedInUser} user={user}/>} />
          <Route path='/private_classes' element={<PrivateClasses loggedInUser={loggedInUser} user={user} classToDisplay={classToDisplay} setClassToDisplay={setClassToDisplay}/>} />
          <Route path='/profile' element={<Profile loggedInUser={loggedInUser} user={user}/>}/>
        </> : null}
        {user["trainer_id"] && user["trainer_id"] > 0 ? <Route path='/trainer' element={<PageTrainer user={user} loggedInUser={loggedInUser}/>} /> : null }
      </Routes>
    </div>
  ) 
}

export default App;