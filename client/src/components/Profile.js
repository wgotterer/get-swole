import { useState, useEffect } from "react";

function Profile({user}) {
    const [profile, setProfile] = useState(null)
   
    useEffect(() => {
      fetch(`http://localhost:3000/clients/${user.client_id}`)
       .then((resp)=> resp.json())
       .then((data)=> setProfile(data))
   }, [])


    return profile!==null? (
        <div className='Profile'>
            <h3>Profile</h3>
            <h3>Name: {profile.name}</h3>
            <h3>Email: {profile.email}</h3>
            <h3>Birth: {profile.birth}</h3>
            <h3>Goal: {profile.goal}</h3>   
        </div>
    ):
     null
}

export default Profile;