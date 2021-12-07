import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import ClassInfo from "./ClassInfo";

function Classes({loggedInUser}) {
    const [classToDisplay, setClassToDisplay] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/online_classes')
        .then(resp => resp.json())
        .then(data=>{console.log(data)
        setClassToDisplay(data)})
    },[])
    console.log(classToDisplay)
    let singleClass = classToDisplay.map((oneclass)=>{
        return <ClassCard
        key={oneclass.id}
        oneclass= {oneclass}
        name= {oneclass.name}
        category={oneclass.category}
        trainer={oneclass.trainer.name}
        />
    })


    return loggedInUser ? (
        <div className='Classes'>
            <div className='FavoriteClassContainer'>
                <h2>These are all of the Classes:</h2>
                <form>
                    <label>Search: </label>
                    <input
                        type='text'
                        name='name'
                    />
                    <label> Category: </label>
                    <select name='goal'>
                        <option value='Upper Body'>Upper Body</option>
                        <option value='Lower Body'>Lower Body</option>
                        <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                        <option value='Weight Loss'>Weight Loss</option>
                    </select>
                </form>
                {(classToDisplay[0]!==undefined)?
                <div>{singleClass}</div>:
                <p>Don't show clasee </p>}
                
            </div>
            {/* {classToDisplay === undefined ? <p>Feel free to click on any class above to get more details about it</p> : <ClassInfo classToDisplay={classToDisplay} />} */}
        </div>
    )
    :
    (
        <p>Please log in!</p>
    )
}

export default Classes;