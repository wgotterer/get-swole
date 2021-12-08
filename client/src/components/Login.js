import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login({onLogin, setLoggedInUser}) {
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
        fetch("http://localhost:3000/trainers")
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
        fetch('http://localhost:3000/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            withCredentials: true,
            body: JSON.stringify(loginFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            onLogin(data);
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
        fetch('http://localhost:3000/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupFormData)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            const updatedData = {...signupFormData, client_id: data.id};
            console.log(updatedData);
            handleSignupPartTwo(updatedData);
        });
    }

    function handleSignupPartTwo(updatedData) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setSignupFormData({
                name: '',
                username: '',
                email: '',
                birth: '',
                goal: '',
                password: '',
                confirm: ''
            });
        });
    }

    return trainers ? (
        <div className='Login'>
            <h2>Returning User? Log in Here:</h2>
            <form onSubmit={handleLogin}>
                <label> Username: </label>
                <input 
                    type='text'
                    name='username'
                    value={loginFormData.username}
                    onChange={handleLoginChange}
                />
                <label> Password: </label>
                <input
                    type='password'
                    name='password'
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                />
                <input
                    type='submit'
                />
            </form>
            <h2>New User? Sign Up Here:</h2>
            <form onSubmit={handleSignup}>
                <label> Full name: </label>
                <input
                    type='text'
                    name='name'
                    value={signupFormData.name}
                    onChange={handleSignupChange}
                />
                <label> Username: </label>
                <input
                    type='text'
                    name='username'
                    value={signupFormData.username}
                    onChange={handleSignupChange}
                />
                <label> Email: </label>
                <input
                    type='email'
                    name='email'
                    value={signupFormData.email}
                    onChange={handleSignupChange}
                />
                <label> Birthday: </label>
                <input
                    type='date'
                    name='birth'
                    value={signupFormData.birth}
                    onChange={handleSignupChange}
                />
                <label> Goal: </label>
                <select name='goal' value={signupFormData.goal} onChange={handleSignupChange}>
                    <option value={null}>Pick a goal...</option>
                    <option value='Upper Body'>Upper Body</option>
                    <option value='Lower Body'>Lower Body</option>
                    <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                    <option value='Weight Loss'>Weight Loss</option>
                </select>
                <label> Password: </label>
                <input
                    type='password'
                    name='password'
                    value={signupFormData.password}
                    onChange={handleSignupChange}
                />
                <label> Confirm Password </label>
                <input
                    type='password'
                    name='confirm'
                    value={signupFormData.confirm}
                    onChange={handleSignupChange}
                />
                <input
                    type='submit'
                />
            </form>
        </div>
    ) : null
}

export default Login;