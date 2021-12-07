import { useState } from "react";
import ClassCard from "./ClassCard";
import ClassInfo from "./ClassInfo";

function Classes({loggedInUser}) {
    const [classToDisplay, setClassToDisplay] = useState(undefined);

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
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </div>
            {classToDisplay === undefined ? <p>Feel free to click on any class above to get more details about it</p> : <ClassInfo classToDisplay={classToDisplay} />}
        </div>
    )
    :
    (
        <p>Please log in!</p>
    )
}

export default Classes;