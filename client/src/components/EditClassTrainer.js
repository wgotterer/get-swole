import {useState} from 'react';

function EditClassTrainer({oneClass}) {
    const [editClassForm, setEditClassForm] = useState(oneClass)

    function handleEditClass(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/online_classes/${oneClass.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editClassForm)
        })
        .then(resp => resp.json())
        .then(classInfo => {
            console.log(classInfo);
            setEditClassForm({
                video: "",
                description: "",
                category: "",
                name: ""
            });
        });   
    }

    function handleEditFormChange(e) {
        setEditClassForm({...editClassForm, [e.target.name] : e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleEditClass}>
                <lablel>Class Name</lablel>
                <input
                    type="text"
                    name="name"
                    value={editClassForm.name}
                    onChange={handleEditFormChange}
                />
                <lablel>Description</lablel>
                <input
                    type="text"
                    name="description"
                    value={editClassForm.description}
                    onChange={handleEditFormChange}
                />
                <lablel>Video</lablel>
                <input 
                    type="text"
                    name="video"
                    value={editClassForm.video}
                    onChange={handleEditFormChange}
                />
                <lablel>Category</lablel>
                <select name="category" value={editClassForm.category} onChange={handleEditFormChange}>
                    <option value={null}>Pick a goal...</option>
                    <option value='Upper Body'>Upper Body</option>
                    <option value='Lower Body'>Lower Body</option>
                    <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                    <option value='Weight Loss'>Weight Loss</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditClassTrainer;