import TrainerCard from "./TrainerCard";
import {useEffect, useState} from 'react';

function Home() {

    const [trainers, setTrainers] = useState()


    useEffect(() => {
        fetch("http://localhost:3000/trainers")
        .then((resp)=>resp.json())
        .then((trainersData)=> setTrainers(trainersData))
     }, [])

    return trainers ?(
        <div className='Home'>
            <h2>About Us</h2>
            <p>Get Swole is the premier online workout app! With Get Swole you can focus on getting a killer workout with trainers that care! Get Swole was founded by three Software Engineers who felt crappy sitting in a chair all day and wanted to <em>get swole</em>!</p>
            <h2>Our Trainers</h2>
            {/* Here we will render trainer cards based on data from the database */}
            {trainers.map(trainer => <TrainerCard trainer={trainer} key={trainer.id} />)}

        </div>
    ) : null
}

export default Home;