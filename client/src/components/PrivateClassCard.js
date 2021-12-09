import { useState, useEffect } from "react";

function PrivateClassCard({classId, user}) { 
    const [privateClass, setPrivateClass] = useState();
   
    useEffect(()=>{
        fetch(`http://localhost:3000/private_classes/${classId}`)
        .then(resp => resp.json())
        .then(data=>{
            setPrivateClass(data);
        });
    },[]);

    return classId && privateClass? (
        <div className='ClassCard'>
            <h2>Class time : {privateClass.date}</h2>
            {user.trainer_id !== 0? <h2>Client : {privateClass.client.name}</h2>:<h2>Trainer : {privateClass.trainer.name}</h2>}
            <h2>Goal : {privateClass.description}</h2>
        </div>
    ) : null
}

export default PrivateClassCard;