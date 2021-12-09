import {useState} from 'react';
import ReactPlayer from 'react-player/youtube';


import EditClassTrainer from './EditClassTrainer';

function PageTrainerCard({oneClass, user, handleDeleteClass, setAllClasses}) {
    const [showEditForm, setShowEditForm] = useState(false);

    function handleClick() {
        setShowEditForm(!showEditForm);
    }

    return oneClass ? (
        <div className="trainer_class_container">
            <h3>{oneClass.name}</h3> 
            <h4>{oneClass.category}</h4>
            <h3>{oneClass.description}</h3>
            <ReactPlayer height="300px" width="300px" url={oneClass.video}/>
            <button onClick={handleClick}>{showEditForm ? "Close" : "Edit Class"}</button>
            <button onClick={() => handleDeleteClass(oneClass)}>Delete</button>
            {showEditForm ? <EditClassTrainer setAllClasses={setAllClasses} key={oneClass.id} user={user} oneClass={oneClass} /> : null}
        </div>
    ) : null
}

export default PageTrainerCard;