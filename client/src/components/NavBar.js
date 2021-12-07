import {Link} from 'react-router-dom';

function NavBar({handleLoginButton}) {
    return (
        <div className='NavBar'>
            <h1>Get Swole! 💪</h1>
            {handleLoginButton === false ? <Link to='/login'><button>Log In</button></Link> : <button>Profile</button>}
            <nav>
                <Link to='/'>Home</Link> |{' '}
                <Link to='/dashboard'>Dashboard</Link> |{' '}
                <Link to='/classes'>Classes</Link>
            </nav>
        </div>
    )
}

export default NavBar;