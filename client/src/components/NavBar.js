import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function NavBar({loggedInUser, setLoggedInUser, user, setUser}) {
    let navigate = useNavigate();

    function handleLogOut() {
        fetch("/api/logout", {
            method: "DELETE"
        })
        .then(() => {
            setLoggedInUser(false);
            setUser({});
            navigate('/');
        });
    }

    return (
        <div className='NavBar'>
            <h1>Get Swole! 💪</h1>
            {loggedInUser === false ? <Link to='/login'><button>Log In</button></Link> : <> <Link to='/profile'><button>Profile</button></Link> {' '} <button onClick={handleLogOut}>Logout</button> </>}
            <nav className="link_container">
                <Link to='/'>Home</Link> {' '}
                {loggedInUser ? <>
                    <Link to='/dashboard'>Dashboard</Link> {' '}
                    <Link to='/classes'>Classes</Link> {' '}
                    <Link to='/private_classes'>Schedule a private class</Link> {' '}
                    {user["trainer_id"] && user["trainer_id"] > 0 ? <Link to='/trainer'>Trainer</Link> : null}
                </> : null}
            </nav>
        </div>
    )
}

export default NavBar;