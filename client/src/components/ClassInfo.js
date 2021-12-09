import { useState } from "react";
import Popup from "react-popup"

function ClassInfo({classInfo, user, handleReRender}) {
    const [showForm, setShowForm] = useState(false)
    
    function handleClick(){
        setShowForm(!showForm)
    }
    console.log(user)
    const [reviewForm, setReviewForm] = useState({
        content: '',
        rating: undefined,
        online_class_id: classInfo.id,
        client_id: user.client_id,
        client_name: user.username
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
            setReviewForm({
                content: '',
                rating: undefined,
                online_class_id: classInfo.id,
                client_id: user.client_id,
                client_name:user.username
            });
        });
    }
    function handleDelete(review){
        console.log(review)
        if (review.client_id === user.client_id)
        fetch(`http://localhost:3000/reviews/${review.id}`,{
        method: "DELETE",})
        .then( handleReRender())
        
        else 
        console.log("this is not your review!")
        Popup.alert('This is not your review!');
        
    }
   
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
           <p>Wrote by: {review.client_name}</p>
           <button onClick={()=>handleDelete(review)}>delete</button>
          
              
           </div>
           
           ): null}
           
        </div>
    ) : null 
}

export default ClassInfo;