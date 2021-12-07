import { useState } from "react";
import ClassInfo from "./ClassInfo";
function ClassCard({oneclass, name, category, trainer}) {
    const [showDetails, setShowDetails] = useState(false)
    function handleClick(){
        setShowDetails(!showDetails)
    }
    console.log(oneclass)
    return (
        <div onClick={handleClick} className='ClassCard'>
            <h2>Class name : {name}</h2>
            <h2>Category : {category}</h2>
            <h2>Trainer : {trainer}</h2>
            {showDetails? <ClassInfo classInfo={oneclass}/>: null}
        </div>
    )
}

export default ClassCard;