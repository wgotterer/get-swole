import { useState } from "react";
import ClassCard from "./ClassCard";
import ClassInfo from "./ClassInfo";

function Dashboard() {
    const [classToDisplay, setClassToDisplay] = useState(undefined);

    return (
        <div className='Dashboard'>
            <p>this is the dashboard</p>
            <h3>Welcome back (user's name goes here)!</h3>
            <div className='FavoriteClassContainer'>
                <h2>These are your favorite Classes:</h2>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </div>
            <div className='ReccomendedClassContainer'>
                <h2>These are classes we reccomend based on your workout goal!</h2>
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </div>
            {classToDisplay === undefined ? <p>Feel free to click on any class above to get more details about it</p> : <ClassInfo classToDisplay={classToDisplay} />}
        </div>
    )
}

export default Dashboard;