import {Link} from 'react-router-dom';

function NavBar({loggedInUser}) {
    return (
        <div className='NavBar'>
            <h1>Get Swole! 💪</h1>
            {loggedInUser === false ? <Link to='/login'><button>Log In</button></Link> : <button>Profile</button>}
            <nav>
                <Link to='/'>Home</Link> |{' '}
                <Link to='/dashboard'>Dashboard</Link> |{' '}
                <Link to='/classes'>Classes</Link>
            </nav>
        </div>
    )
}

export default NavBar;