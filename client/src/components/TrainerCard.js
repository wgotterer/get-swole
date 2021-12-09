function TrainerCard({trainer}) {
    
    return trainer ? (
        <div className='trainer_card_grid_item'>
            <h3>{trainer.name}</h3>
            <div className="bio_container">
            <p>{trainer.bio}</p>
            </div>
            <img height="200" width="200" src={trainer.picture} alt='trainer'/>
        </div>
    ) : null
}

export default TrainerCard;