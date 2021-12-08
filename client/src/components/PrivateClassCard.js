import { useState } from "react";


function PrivateClassCard({oneClass}) {
    console.log(oneClass)
   
    
    return oneClass ? (
        <div className='ClassCard'>
            <h2>Class time : {oneClass.date}</h2>
            <h2>Goal : {oneClass.description}</h2>
            <h2>Trainer : {oneClass.trainer_id}</h2>
        </div>
    ) : null
}

export default PrivateClassCard;