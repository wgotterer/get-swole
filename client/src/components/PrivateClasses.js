import {useState} from 'react';
function PrivateClasses({user}) {
    console.log(user)
    const [signUpPrivateClass, setSignUpPrivateClass] = useState({
        client_id: user.client_id,
        trainer_id: 0,
        date: '',
        description: ''
    });
    function handlePrivateSignUpForm (event) {
        console.log(event.target.value);
        setSignUpPrivateClass({...signUpPrivateClass, [event.target.name]: event.target.value});
    }
    function handlePrivateClassSignUp(event) {
        event.preventDefault();
        fetch('http://localhost:3000/private_classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpPrivateClass)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
        });
    }
    return (
        <div onSubmit={handlePrivateClassSignUp} >
         <p>Schedule an appointment</p>
         <form >
                <label> Trainer: </label>
                <select name='trainer_id' value={signUpPrivateClass.trainer_id} onChange={handlePrivateSignUpForm}>
                    <option value={null}>Pick a Trainer...</option>
                    <option value={1}>Brendan</option>
                    <option value={2}>Jane</option>
                    <option value={3}>Juliette</option>
                    <option value={4}>William</option>
                </select>
                <label> Date: </label>
                <input
                    type='datetime-local'
                    name='date'
                    value={signUpPrivateClass.date}
                    onChange={handlePrivateSignUpForm}
                />
                <label> What is your goal for this session: </label>
                <input
                    type='text'
                    name='description'
                    value={signUpPrivateClass.description}
                    onChange={handlePrivateSignUpForm}
                />
                
                <input
                    type='submit'
                />
            </form>
        </div>
    )
}

export default PrivateClasses;