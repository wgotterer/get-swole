import { useState, useEffect } from "react";

function Profile({user}) {
    const [profile, setProfile] = useState(null);
   
    useEffect(() => {
        if (user.trainer_id!==0) {
            fetch(`http://localhost:3000/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                setProfile(data);
            });
        } else {
            fetch(`http://localhost:3000/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => setProfile(data));
        }
    }, []);

    return profile !== null ? (
        <div className='Profile'>
            <h3>Profile</h3>
            {profile.trainer_id ===0 ? 
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
    ) : null
}

export default Profile;