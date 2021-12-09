import { useState } from "react";

import ClassInfo from "./ClassInfo";

function ClassCard({oneClass, user}) {
    const [showDetails, setShowDetails] = useState(false);

    function handleClick(){
        setShowDetails(!showDetails);
    }
    
    return oneClass ? (
        <div className='singleClass'>
            <div  onClick={handleClick} >
            <h2>Class name : {oneClass.name}</h2>
            <h2>Category : {oneClass.category}</h2>
            <h2>Trainer : {oneClass.trainer["name"]}</h2>
            </div>
            {showDetails? <ClassInfo  classInfo={oneClass} user={user}/>: null}
        </div>
    ) : null
}

export default ClassCard;