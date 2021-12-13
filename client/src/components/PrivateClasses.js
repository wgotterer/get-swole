import {useState} from 'react';

function PrivateClasses({loggedInUser, user, classToDisplay, setClassToDisplay}) {
    const [signUpPrivateClass, setSignUpPrivateClass] = useState({
        client_id: user.client_id,
        trainer_id: 0,
        date: '',
        description: ''
    });

    function handlePrivateSignUpForm (event) {
        setSignUpPrivateClass({...signUpPrivateClass, [event.target.name]: event.target.value});
    }

    function handlePrivateClassSignUp(event) {
        event.preventDefault();
        fetch('/api/private_classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpPrivateClass)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setClassToDisplay([...classToDisplay, data])
            setSignUpPrivateClass({
                client_id: user.client_id,
                trainer_id: 0,
                date: '',
                description: ''
            });
            alert('Successfully signed up for class! You can now view it in your dashboard!');
        });
    }

    return loggedInUser ? (
        <div className='scheduleClass' onSubmit={handlePrivateClassSignUp} >
            <p>Schedule an appointment</p>
            <form >
                <label> Trainer: </label>
                <label> 
                <select name='trainer_id' value={signUpPrivateClass.trainer_id} onChange={handlePrivateSignUpForm}>
                    <option value={null}>Pick a Trainer...</option>
                    <option value={1}>Brendan</option>
                    <option value={2}>Jane</option>
                    <option value={3}>Juliette</option>
                    <option value={4}>William</option>
                </select>
                </label>
                <label> Date: </label>
                <label> 
                <input
                    type='datetime-local'
                    name='date'
                    value={signUpPrivateClass.date}
                    onChange={handlePrivateSignUpForm}
                />
                </label>
                <label>
                    What is your goal for this session: 
                </label>
                <label>
                <input
                    type='text'
                    name='description'
                    value={signUpPrivateClass.description}
                    onChange={handlePrivateSignUpForm}
                />
                </label>
                <label> 
                <input
                    type='submit'
                />
                </label>
            </form>
        </div>
    ) : (
        <p>Please log in!</p>
    )
}

export default PrivateClasses;