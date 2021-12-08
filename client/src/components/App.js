import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { useState ,useEffect} from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Classes from './Classes';
import PrivateClasses from './PrivateClasses';

import Profile from './Profile';

import PageTrainer from './PageTrainer';


function App() {

  
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch('http://localhost:3000/me', {credentials: 'include'})
    .then((response) => {
      if (response.ok) {
        response.json().then((user) =>{ setUser(user) 
          console.log(user["trainer_id"])
          setLoggedInUser(true)
          // console.log(loggedInUser)
       });
      }
    });
  }, []);

  // function handleLoginButton(){
  //   setLoggedInUser(loggedInUser)
  // }

 

  // if (!user) return <Login onLogin={setUser}/>
    
  return (
    // if (user) {
    //   return <h2>Welcome, {user.username}!</h2>;
    // } else {
    //   return <Login onLogin={setUser} />;
    // }
    
    <div className="App">
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} user={user}/>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} onLogin={setUser}/>}/>
        {user? <Route path='/dashboard' element={<Dashboard loggedInUser={loggedInUser} user={user}/>} />:null}
        <Route path='/classes' element={<Classes loggedInUser={loggedInUser}/>} />
        {user ? <Route path='/private_classes' element={<PrivateClasses loggedInUser={loggedInUser} user={user}/>} />: null}

        {user ? <Route path='/profile' element={<Profile user={user}/>}/>: null}

       
     {/* {user ? <Route path='/trainer' element={<PageTrainer user={user} />} /> : null } */}
  
      {user["trainer_id"] && user["trainer_id"] > 0 ? <Route path='/trainer' element={<PageTrainer user={user} />} /> : null }


      </Routes>
    </div>
  ) 
}

export default App;