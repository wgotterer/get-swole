import {useEffect, useState} from "react";

import PrivateClassCard from "./PrivateClassCard";
let currentDate = (new Date()).toISOString()
function Dashboard({loggedInUser, user, classToDisplay, setClassToDisplay}) {
    const [futureClasses, setFutureClasses]= useState([])
    const [pastClasses, setPastClasses] = useState([])
    useEffect(() => {
        if (user.trainer_id && user.trainer_id !== 0) {
            fetch(`/api/trainers/${user.trainer_id}`)
            .then(resp => resp.json())
            .then(data => {
                data.private_classes.map((item)=> {(item.date >= currentDate) ? setFutureClasses((futureClasses) => [item,...futureClasses]) : setPastClasses((pastClasses) => [item,...pastClasses])})
                setClassToDisplay(data.private_classes)
            });
        } else {
            fetch(`/api/clients/${user.client_id}`)
            .then(resp => resp.json())
            .then(data => {
                data.private_classes.map((item)=> {(item.date >= currentDate) ? setFutureClasses((futureClasses) => [item,...futureClasses]) : setPastClasses((pastClasses) => [item,...pastClasses])})
                setClassToDisplay(data.private_classes);
            });
        }
    }, [user]);
   
    return classToDisplay && loggedInUser  ? (
    
        <div className='Dashboard'>
            {console.log(pastClasses)}
            <h3 className='welcome'>Welcome back {user.username}!</h3>
            <h2>These are your upcoming Classes:</h2>
            <div className='UpcomingClassContainer'>
                {futureClasses.map(oneClass =>  <PrivateClassCard user={user} key={oneClass.id} classId={oneClass.id} />)}    
            </div>
            <h2>These are your past Classes:</h2>
            <div className='pastClasses'>
            {pastClasses.map(oneClass =>  <PrivateClassCard user={user} key={oneClass.id} classId={oneClass.id} />)}
            </div>
        </div>
    ) : (
      <p>Please log in!</p>
    )
}

export default Dashboard;