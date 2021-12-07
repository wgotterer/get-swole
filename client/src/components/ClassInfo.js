function ClassInfo({classInfo}) {
    return (
        <div className='ClassInfo'>
           <p>{classInfo.description}</p>
           <p>{classInfo.video}</p>
        </div>
    )
}

export default ClassInfo;