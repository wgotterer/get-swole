import { useState, useEffect } from "react";

function Profile({loggedInUser, user}) {
    const [profile, setProfile] = useState(null);
    console.log(user)
    useEffect(() => {
        if (user.trainer_id && user.trainer_id!==0) {
            fetch(`/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                setProfile(data);
                console.log(data);
            });
        } else {
            fetch(`/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => setProfile(data));
        }
    }, []);

    return profile !== null && loggedInUser ? (
        <div className='Profile'>
            <h3>Profile</h3>
            {profile.birth !==undefined ? 
                <div>
                    <h3>Name: {profile.name}</h3>
                    <h3>Email: {profile.email}</h3>
                    <h3>Birth: {profile.birth}</h3>
                    <h3>Goal: {profile.goal}</h3>
                </div> : 
                <div>
                    <h3>Name: {profile.name}</h3>
                    <img height="200" width="200" src={profile.picture} alt='profile'/>
                    <p>Bio: {profile.bio}</p>
                </div>
            } 
        </div>
    ) : (
        <p>Please log in!</p>
    )
}

export default Profile;