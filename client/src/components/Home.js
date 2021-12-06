import TrainerCard from "./TrainerCard";

function Home() {
    return (
        <div className='Home'>
            <p>This is the home page</p>
            <h2>About Us</h2>
            <p>Get Swole is the premier online workout app! With Get Swole you can focus on getting a killer workout with trainers that care! Get Swole was founded by three Software Engineers who felt crappy sitting in a chair all day and wanted to <em>get swole</em>!</p>
            <h2>Our Trainers</h2>
            {/* Here we will render trainer cards based on data from the database */}
            <TrainerCard name={'Brendan'} />
            <TrainerCard name={'Jane'} />
            <TrainerCard name={'Juliette'} />
            <TrainerCard name={'William'} />
        </div>
    )
}

export default Home;