import {Route, Routes} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import './App.css';
import { useState ,useEffect} from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Classes from './Classes';

function App() {

  
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/me').then((response) => {
      if (response.ok) {
        response.json().then((user) =>{ setUser(user) 
          setLoggedInUser(true)
          console.log(loggedInUser)
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
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser} onLogin={setUser}/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/classes' element={<Classes />} />
      </Routes>
    </div>
  ) 
}

export default App;