function ClassInfo({classInfo}) {
    console.log(classInfo.reviews)
    return classInfo ? (
        <div className='ClassInfo'>
           <p>{classInfo.description}</p>
           <p>{classInfo.video}</p>
           {classInfo.reviews? classInfo.reviews.map(review=>  
           <div>
           <p>Review: {review.content}</p>
           <p>Rating: {review.rating}</p>
           <p>Wrote by: {review.client_id}</p>
           </div>
           
           ): null}
           
        </div>
    ) : null 
}

export default ClassInfo;