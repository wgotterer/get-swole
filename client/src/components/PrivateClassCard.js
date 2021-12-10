import { useState, useEffect } from "react";

function PrivateClassCard({classId, user}) { 
    const [privateClass, setPrivateClass] = useState();
    const [dateString, setDateString] = useState()
    useEffect(()=>{
        fetch(`/private_classes/${classId}`)
        .then(resp => resp.json())
        .then(data=>{
            setPrivateClass(data);
            let d = new Date(data.date);
            setDateString( d.toLocaleString('en-US'))
        });
    },[]);
   
    return classId && privateClass && dateString? (  
        <div className='prviateClass'>
            <h2>Class time : {dateString} </h2>
            {user.trainer_id !== 0? <h2>Client : {privateClass.client.name}</h2>:<h2>Trainer : {privateClass.trainer.name}</h2>}
            <h2>Goal : {privateClass.description}</h2>
        </div>
    ) : null
}

export default PrivateClassCard;