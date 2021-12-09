import {useEffect} from "react";

import PrivateClassCard from "./PrivateClassCard";

function Dashboard({loggedInUser, user, classToDisplay, setClassToDisplay}) {

    useEffect(() => {
        if (user.trainer_id && user.trainer_id !== 0) {
            fetch(`/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                setClassToDisplay(data.private_classes)
                
            });
        } else {
            fetch(`/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => {
                setClassToDisplay(data.private_classes);
            });
        }
    }, [user]);
   
    return classToDisplay && loggedInUser ? (
        <div className='Dashboard'>
            <h3>Welcome back {user.username}!</h3>
            <div className='UpcomingClassContainer'>
                <h2>These are your upcoming Classes:</h2>
                {classToDisplay.map(oneClass =>  <PrivateClassCard user={user} key={oneClass.id} classId={oneClass.id} />)}
            </div>
        </div>
    ) : (
      <p>Please log in!</p>
    )
}

export default Dashboard;