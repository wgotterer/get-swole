import { useState } from "react";

function ClassInfo({classInfo, user}) {
    const [showForm, setShowForm] = useState(false)
    function handleClick(){
        setShowForm(!showForm)
    }
    const [reviewForm, setReviewForm] = useState({
        content: '',
        rating: null,
        online_class_id: classInfo.id,
        client_id: user.client_id
    });
    function handleReviewForm (event) {
        setReviewForm({...reviewForm, [event.target.name]: event.target.value});
    }
    function submitForm(event) {
        event.preventDefault();
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewForm)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setReviewForm({
                content: '',
                rating: null,
                online_class_id: classInfo.id,
                client_id: user.client_id
            });
        });
    }
    console.log(classInfo.reviews)
    return classInfo ? (
        <div className='ClassInfo'>
           <p>{classInfo.description}</p>
           <p>{classInfo.video}</p>
           <button onClick={handleClick}>Add review</button>
           {showForm?<div> <form onSubmit={submitForm} >
                <label> Review:</label>
                <input
                    type='text'
                    name='content'
                    value={reviewForm.content}
                    onChange={handleReviewForm}
                />
                <label> Rating: </label>
                <input
                    type='number'
                    name='rating'
                    placeholder='Please input 1 to 10'
                    value={reviewForm.rating}
                    onChange={handleReviewForm}
                />
                <input
                    type='submit'
                />
            </form></div>: 
            null} 
           {classInfo.reviews? classInfo.reviews.map(review=>  
           <div key={review.id}>
        
           <p>Review: {review.content}</p>
           <p>Rating: {review.rating}/10</p>
           {/* <p>Wrote by: {review}</p> */}

          
              
           </div>
           
           ): null}
           
        </div>
    ) : null 
}

export default ClassInfo;