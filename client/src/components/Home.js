import {useEffect, useState} from 'react';
import TrainerCard from "./TrainerCard";

function Home() {
    const [trainers, setTrainers] = useState();

    useEffect(() => {
        fetch("/api/trainers")
        .then(resp =>resp.json())
        .then(trainersData => setTrainers(trainersData));
    }, []);

    return trainers ? (
        <div className='Home'>
            <div className="title_container">
            <h2>About Us</h2>
            <p>Get Swole is the premier online workout app! With Get Swole you can focus on getting a killer workout with trainers that care! Get Swole was founded by three Software Engineers who felt crappy sitting in a chair all day and wanted to <em>get swole</em>!</p>
            </div>
            <h2>Meet Our Trainers</h2>
            <div className="trainer_grid_container">
            {trainers.map(trainer => <TrainerCard trainer={trainer} key={trainer.id} />)}
            </div>
        </div>
    ) : null
}

export default Home;