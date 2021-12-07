import {Link} from 'react-router-dom';
import {  useNavigate  } from "react-router-dom";

function NavBar({loggedInUser, setLoggedInUser}) {

    let navigate = useNavigate();

   function handleLogOut(){
        fetch("http://localhost:3000/trainers", {
            method: "DELETE",
        }).then(()=>setLoggedInUser(false))
        navigate("/")
    }

    return (
        <div className='NavBar'>
            <h1>Get Swole! 💪</h1>
            {loggedInUser === false ? <Link to='/login'><button>Log In</button></Link> : <> <button>Profile</button> <button onClick={handleLogOut}>Logout</button> </>}

            <nav>
                <Link to='/'>Home</Link> |{' '}
                <Link to='/dashboard'>Dashboard</Link> |{' '}
                <Link to='/classes'>Classes</Link>
            </nav>
        </div>
    )
}

export default NavBar;