import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login({setUser, setLoggedInUser}) {
    let navigate = useNavigate();
    const [trainers, setTrainers] = useState();
    const [loginFormData, setLoginFormData] = useState({
        username: '',
        password: ''
    });
    const [signupFormData, setSignupFormData] = useState({
        name: '',
        username: '',
        email: '',
        birth: '',
        goal: '',
        password: '',
        confirm: ''
    });

    useEffect(() => {
        fetch("/api/trainers")
        .then(resp => resp.json())
        .then(trainersData => setTrainers(trainersData));
    }, []);

    function handleLoginChange(event) {
        setLoginFormData({...loginFormData, [event.target.name]: event.target.value});
    }

    function handleSignupChange(event) {
        setSignupFormData({...signupFormData, [event.target.name]: event.target.value});
    }

    function handleLogin(event) {
        event.preventDefault();
        fetch('/api/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            setUser(data);
            setLoggedInUser(true);
            setLoginFormData({
                username: '',
                password: ''
            });
            navigate("/dashboard");
        });
    }

    function handleSignup(event) {
        event.preventDefault();
        fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            const updatedData = {...signupFormData, client_id: data.id};
            handleSignupPartTwo(updatedData);
        });
    }

    function handleSignupPartTwo(updatedData) {
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(resp => resp.json())
        .then(data => {
            setLoggedInUser(true);
            setUser(data);
            setSignupFormData({
                name: '',
                username: '',
                email: '',
                birth: '',
                goal: '',
                password: '',
                confirm: ''
            });
            navigate('/dashboard');
        });
    }

    return trainers ? (
        <div className='Login'>
            <h2>Returning User? Log in Here:</h2>
            <form className="login_form_container" onSubmit={handleLogin}>
                <label> Username: </label>
                <label>
                <input 
                    type='text'
                    name='username'
                    value={loginFormData.username}
                    onChange={handleLoginChange}
                    placeholder="username"
                />
                </label>
                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    placeholder="password"
                />
                </label>
                <label>
                <input
                    type='submit'
                />
                </label>
            </form>
            <h2>New User? Sign Up Here:</h2>
            <form className="sign_up_form_container" onSubmit={handleSignup}>
                <label> Full name: </label>
                <label> 
                <input
                    id="fname"
                    type='text'
                    name='name'
                    value={signupFormData.name}
                    onChange={handleSignupChange}
                    placeholder="full name"
                />
                </label>
                <label> Username: </label>
                <label>
                <input
                    type='text'
                    name='username'
                    value={signupFormData.username}
                    onChange={handleSignupChange}
                    placeholder="username"
                />
                </label>
                <label> Email: </label>
                <label>
                <input
                    type='text'
                    name='email'
                    value={signupFormData.email}
                    onChange={handleSignupChange}
                    placeholder="email"
                />
                </label>
                <label> Birthday: </label>
                <label>
                <input
                    type='date'
                    name='birth'
                    value={signupFormData.birth}
                    onChange={handleSignupChange}
                    placeholder="birthday"
                />
                </label>
                <label> Goal: </label>
                <label> 
                <select name='goal' value={signupFormData.goal} onChange={handleSignupChange}>
                    <option value={null}>Pick a goal...</option>
                    <option value='Upper Body'>Upper Body</option>
                    <option value='Lower Body'>Lower Body</option>
                    <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                    <option value='Weight Loss'>Weight Loss</option>
                </select>
                </label>
                <label> Password: </label>
                <label>
                <input
                    type='password'
                    name='password'
                    value={signupFormData.password}
                    onChange={handleSignupChange}
                    placeholder="password"
                />
                </label>
                <label> Confirm Password </label>
                <label> 
                <input
                    type='password'
                    name='confirm'
                    value={signupFormData.confirm}
                    onChange={handleSignupChange}
                    placeholder="confirm password"
                />
                </label>
                <input
                    type='submit'
                />
            </form>
        </div>
    ) : null
}

export default Login;