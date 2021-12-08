import React from 'react'
import { useState ,useEffect} from 'react';
import PageTrainerCard from './PageTrainerCard';


 function PageTrainer({user}) {
     console.log(user.trainer_id)

     const [currentTrainer, setCurrentTrainer] = useState()

   
    useEffect(() => {
       fetch(`http://localhost:3000/trainers/${user.trainer_id}`)
        .then((resp)=> resp.json())
        .then((trainerInfo)=> setCurrentTrainer(trainerInfo))
    }, [])
    
    // console.log(currentTrainer)

    return user && currentTrainer ?(
        <div>
            
            <h1>{currentTrainer["name"]}</h1>
            <img src={currentTrainer["picture"]} height="200" width="200"/>
            <h2>Upcoming Classes</h2>
            {currentTrainer["private_classes"].map((oneClass) => <PageTrainerCard oneClass={oneClass} />)}
        </div>
    ) : null
}

export default PageTrainer