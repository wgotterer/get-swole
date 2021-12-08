function ClassInfo({classInfo}) {
    return classInfo ? (
        <div className='ClassInfo'>
           <p>{classInfo.description}</p>
           <p>{classInfo.video}</p>
        </div>
    ) : null 
}

export default ClassInfo;