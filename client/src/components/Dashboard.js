import { useState, useEffect } from "react";

import PrivateClassCard from "./PrivateClassCard";

function Dashboard({loggedInUser, user}) {
    const [classToDisplay, setClassToDisplay] = useState(undefined);

    useEffect(() => {
        if (user.trainer_id !== 0) {
            fetch(`http://localhost:3000/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                setClassToDisplay(data.private_classes);
            });
        } else {
            fetch(`http://localhost:3000/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => {
                setClassToDisplay(data.private_classes);
            });
        }
    }, []);
   
    return classToDisplay && loggedInUser ? (
        <div className='Dashboard'>
            <h3>Welcome back {user.username}!</h3>
            <div className='UpcomingClassContainer'>
                <h2>These are your upcoming Classes:</h2>
                {classToDisplay.map(oneClass => <PrivateClassCard key={oneClass.id} oneClass={oneClass} />)}
            </div>
        </div>
    ) : (
      <p>Please log in!</p>  
    )
}

export default Dashboard;