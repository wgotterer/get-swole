import { useEffect, useState } from "react";

import ClassCard from "./ClassCard";

function Classes({loggedInUser, user}) {
    const [allClasses, setAllClasses] = useState();
    const [classToDisplay, setClassToDisplay] = useState();
    const [search, setSearch] = useState();
    const [category, setCategory] = useState();
  
    
    useEffect(()=>{
        fetch('http://localhost:3000/online_classes')
        .then(resp => resp.json())
        .then(data=>{
            setAllClasses(data);
            setClassToDisplay(data);
        });
    },[]);

    function handleSearch(e) {
      setSearch(e.target.value)
      handleFilterSearch(e.target.value)
    }

    function handleFilterSearch(value) {
        setClassToDisplay(allClasses.filter(filterclass => {
            return filterclass.name.toLowerCase().includes(value.toLowerCase());
        }));
    }

    function handleCategory(e) {
        setCategory(e.target.value)
        handleFilterCategory(e.target.value)
    }

    function handleFilterCategory(value) {
        if (value == null) {
            setClassToDisplay(allClasses);
        } else
            setClassToDisplay(allClasses.filter( categoryclass => {
            return (categoryclass.category === value);
        }));
    }

  

    return classToDisplay && loggedInUser ? (
        <div className='Classes'>
            <div className='FavoriteClassContainer'>
                <h2>These are all of the Classes:</h2>
                <form>
                    <label>Search: </label>
                    <input
                        type='text'
                        name='search'
                        id="search"
                        placeholder="Type a class name to search..."
                        value={search}
                        onChange={handleSearch}
                    />
                    <label> Category: </label>
                    <select name='category' value={category} onChange={handleCategory}>
                        <option value="all">Pick a Category...</option>
                        <option value='Upper Body'>Upper Body</option>
                        <option value='Lower Body'>Lower Body</option>
                        <option value='Stretching and Flexibility'>Stretching and Flexibility</option>
                        <option value='Weight Loss'>Weight Loss</option>
                    </select>
                </form>
                {classToDisplay.map(oneClass => <ClassCard  key={oneClass.id} oneClass={oneClass} user={user}/>)}
            </div>
        </div>
    ) : (
        <p>Please log in!</p>
    )
}

export default Classes;