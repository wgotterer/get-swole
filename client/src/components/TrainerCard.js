
import brend from "../data/brend.JPG"
import willdog from "../data/willdog.jpg"
import jul from "../data/jul.jpg"
import will from "../data/will.jpg"

function TrainerCard({trainer}) {

    let pictureName 

     if (
        trainer.id === 1 
    ){
        pictureName =  brend
    }else if (
        trainer.id === 2
    ){
        pictureName = willdog
    }else if (
        trainer.id === 3
    ){
        pictureName = jul
    }else{
        pictureName = will
    }
       
    
    
    return trainer ? (
        <div className='trainer_card_grid_item'>
            <h3>{trainer.name}</h3>
            <div className="bio_container">
            <p>{trainer.bio}</p>
            </div>
            <img height="200" width="200" src={pictureName} alt='trainer'/>
        </div>
    ) : null
}

export default TrainerCard;