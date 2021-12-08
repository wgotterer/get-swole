function TrainerCard({trainer}) {
    
    return trainer ? (
        <div className='TrainerCard'>
            <h3>{trainer.name}</h3>
            <p>{trainer.bio}</p>
            <img height="200" width="200" src={trainer.picture} alt='trainer'/>
        </div>
    ) : null
}

export default TrainerCard;