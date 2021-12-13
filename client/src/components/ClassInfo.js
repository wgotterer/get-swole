import { useState } from "react";
import ReactPlayer from 'react-player/youtube';



function ClassInfo({classInfo, user}) {
    const [showForm, setShowForm] = useState(false)
    const [updateReviews, setUpdateReviews] = useState(classInfo.reviews)
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
        fetch('/api/reviews', {
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
            setUpdateReviews([...updateReviews,data])
        });
    }
    function handleDelete(review){
        if (review.client_id === user.client_id)
        fetch(`/api/reviews/${review.id}`,{
        method: "DELETE",})
        .then(() => {
            console.log("deleted")
            setUpdateReviews(
                updateReviews.filter( item => item.id !== review.id)
            )
        })
        else 
        alert('This is not your review!');    
    }
    
   
    return updateReviews && classInfo? (
        <div className='ClassInfo'>
           <p>Description:{classInfo.description}</p>
           <ReactPlayer className='classVideo' height="250px" width=" 250px" url={classInfo.video}/>
           <button className='addReview' onClick={handleClick}>Tell us what you think!</button>
           {showForm?<div> <form onSubmit={submitForm} >
                <label> Review:</label>
                <label>
                <input
                    type='text'
                    name='content'
                    value={reviewForm.content}
                    onChange={handleReviewForm}
                />
                </label>
                <label> Rating: </label>
                <label>
                <input
                    type='number'
                    name='rating'
                    placeholder='Please input 1 to 10'
                    value={reviewForm.rating}
                    onChange={handleReviewForm}
                />
                </label>
                <input
                    type='submit'
                />
            </form></div>: 
            null} 
           {updateReviews? updateReviews.map(review=>  
           <div key={review.id}>
           <p>Review: {review.content}</p>
           <p>Rating: {review.rating}/10</p>
           <p>Wrote by: {review.client_name}</p>
           <button onClick={()=>handleDelete(review)}>Delete</button>
          
              
           </div>
           
           ): null}
           
        </div>
    ) : null 
}

export default ClassInfo;