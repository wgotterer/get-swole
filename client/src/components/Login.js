function Login() {
    return (
        <div className='Login'>
            <h2>Returning User? Log in Here:</h2>
            <form>
                <label> Username: </label>
                <input 
                    type='text'
                    name='username'
                />
                <label> Password: </label>
                <input
                    type='password'
                    name='password'
                />
                <input
                    type='submit'
                />
            </form>
            <h2>New User? Sign Up Here:</h2>
            <form>
                <label> Full name: </label>
                <input
                    type='text'
                    name='name'
                />
                <label> Username: </label>
                <input
                    type='text'
                    name='username'
                />
                <label> Email: </label>
                <input
                    type='email'
                    name='email'
                />
                <label> Birthday: </label>
                <input
                    type='date'
                    name='birthday'
                />
                <label> Goal: </label>
                <select name='goal'>
                    <option value='Upper Body'>Upper Body</option>
                    <option value='Lower Body'>Lower Body</option>
                    <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                    <option value='Weight Loss'>Weight Loss</option>
                </select>
                <label> Password: </label>
                <input
                    type='password'
                    name='password'
                />
                <label> Confirm Password </label>
                <input
                    type='password'
                    name='passwordConfirmation'
                />
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}

export default Login;