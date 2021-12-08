import {useState ,useEffect} from 'react';

import PageTrainerCard from './PageTrainerCard';

function PageTrainer({user}) {
    const [currentTrainer, setCurrentTrainer] = useState({});
    const [createClassForm, setCreateClassForm] = useState({
        video: "",
        description: "",
        category: "",
        name: "",
        trainer_id: user.trainer_id
    });

    useEffect(() => {
        fetch(`http://localhost:3000/trainers/${user.trainer_id}`)
        .then(resp => resp.json())
        .then(trainerInfo => setCurrentTrainer(trainerInfo));
    }, []);

    function handleCreateNewClass(e) {
        e.preventDefault();
        fetch("http://localhost:3000/online_classes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createClassForm)
        })
        .then(resp => resp.json())
        .then(classData => {
            setCreateClassForm({
                video: "",
                description: "",
                category: "",
                name: "",
                trainer_id: user.trainer_id
            });
        });
    }

    function handleFormClassChange(e) {
        setCreateClassForm({...createClassForm, [e.target.name] : e.target.value});
    }

    return user && currentTrainer ? (
        <div>
            <h1>{currentTrainer["name"]}</h1>
            <img src={currentTrainer["picture"]} height="200" width="200" alt='trainer'/>
            <div>Add Or Edit an Online Class</div>
            <form onSubmit={handleCreateNewClass}>
                <lablel>Class Name</lablel>
                <input
                    type="text"
                    name="name"
                    value={createClassForm.name}
                    onChange={handleFormClassChange}
                />
                <lablel>Description</lablel>
                <input
                    type="text"
                    name="description"
                    value={createClassForm.description}
                    onChange={handleFormClassChange}
                />
                <lablel>Video</lablel>
                <input 
                    type="text"
                    name="video"
                    value={createClassForm.video}
                    onChange={handleFormClassChange}
                />
                <lablel>Category</lablel>
                <select
                    name="category"
                    value={createClassForm.category}
                    onChange={handleFormClassChange}
                >
                <option value={null}>Pick a goal...</option>
                    <option value='Upper Body'>Upper Body</option>
                    <option value='Lower Body'>Lower Body</option>
                    <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                    <option value='Weight Loss'>Weight Loss</option>
                </select>
                <input type="submit"/>
            </form>
            <h2>Your Online Classes</h2>
            {currentTrainer["online_classes"] && currentTrainer["online_classes"].map((oneClass) => <PageTrainerCard oneClass={oneClass} user={user} key={oneClass.id} />)}
        </div>
    ) : null
}

export default PageTrainer;