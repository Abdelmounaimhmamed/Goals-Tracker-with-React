

import React , {useState} from 'react'
import "./AddGoal.css";

const AddGoal = ({onAddGoal}) => {
    // let enteredText = "";
        const [enteredText , setenteredText] = useState("");
    const addGoalHandler = (e) => {
        e.preventDefault();

        const newElement = { id : 5 , text : enteredText};
        onAddGoal(newElement);
    }
    const changedTextHandler = (event) => {
        setenteredText(event.target.value);
        // enteredText = event.target.value;
    }

    return (
        <form className='field' onSubmit={addGoalHandler}>
            <input type="text" name="text" value={enteredText}onChange={changedTextHandler} placeholder='type Goal to Add' id="text" />
            <button type="submit" >Add Goal</button>
        </form>
    )
}

export default AddGoal;