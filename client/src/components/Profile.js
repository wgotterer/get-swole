import { useState, useEffect } from "react";
import brend from "../data/brend.JPG"
import jane from "../data/jane.jpg"
import jul from "../data/jul.jpg"
import will from "../data/will.jpg"

function Profile({loggedInUser, user}) {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (user.trainer_id && user.trainer_id!==0) {
            fetch(`/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                setProfile(data);
            });
        } else {
            fetch(`/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => setProfile(data));
        }
    }, []);
    let pictureName  
    if (
       user.id === 1 
   ){
       pictureName =  brend
   }else if (
       user.id === 2
   ){
       pictureName = jane
   }else if (
       user.id === 3
   ){
       pictureName = jul
   }else{
       pictureName = will
   }


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
                    <img height="200" width="200" src={pictureName} alt='profile'/>
                    <p>Bio: {profile.bio}</p>
                </div>
            } 
        </div>
    ) : (
        <p>Please log in!</p>
    )
}

export default Profile;