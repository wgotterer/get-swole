import { useState, useEffect } from "react";

function Profile() {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    useEffect(() => {
        fetch('http://localhost:3000/me', {credentials: 'include'})
        .then((response) => {
          if (response.ok) {
            response.json().then((user) =>{ setUser(user) 
              renderProfile(user.client_id)
           });
          }
        });
      }, []);
    function renderProfile(id){
        fetch(`http://localhost:3000/clients/${id}`)
        .then(resp => resp.json())
        .then(data=>{
            setProfile(data)
            })
    }

    
    
   
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