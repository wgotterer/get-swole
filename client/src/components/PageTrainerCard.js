import React from 'react'

 function PageTrainerCard({oneClass}) {
    return (
        <div>
           <h3>{oneClass.client_name}</h3> 
            <h3>{oneClass.date}</h3>
            <h4>{oneClass.description}</h4>
        </div>
    )
}

export default PageTrainerCard