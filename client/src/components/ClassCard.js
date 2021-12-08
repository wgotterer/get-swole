import { useState } from "react";
import ClassInfo from "./ClassInfo";

function ClassCard({oneClass}) {

    const [showDetails, setShowDetails] = useState(false)

    function handleClick(){
        setShowDetails(!showDetails)
    }
    
    return oneClass ? (
        <div onClick={handleClick} className='ClassCard'>
            <h2>Class name : {oneClass.name}</h2>
            <h2>Category : {oneClass.category}</h2>
            <h2>Trainer : {oneClass.trainer["name"]}</h2>
            {showDetails? <ClassInfo classInfo={oneClass}/>: null}
        </div>
    ) : null
}

export default ClassCard;