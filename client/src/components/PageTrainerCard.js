import {useState} from 'react';

import EditClassTrainer from './EditClassTrainer';

function PageTrainerCard({oneClass, user, handleDeleteClass, setAllClasses}) {
    const [showEditForm, setShowEditForm] = useState(false);

    function handleClick() {
        setShowEditForm(!showEditForm);
    }

 



    return (
        <div>
            <h3>{oneClass.name}</h3> 
            <h4>{oneClass.category}</h4>
            <h3>{oneClass.description}</h3>
            <h4>{oneClass.video}</h4>
            <button onClick={handleClick}>{showEditForm ? "Close" : "Edit Class"}</button>
            <button onClick={() => handleDeleteClass(oneClass)}>Delete</button>
            {showEditForm ? <EditClassTrainer setAllClasses={setAllClasses} key={oneClass.id} user={user} oneClass={oneClass} /> : null}
        </div>
    )
}

export default PageTrainerCard;