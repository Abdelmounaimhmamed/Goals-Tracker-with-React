
import { useState } from 'react';
import './App.css';
import AddGoal from './Components/AddGoal/AddGoal';
import GoalLis from './Components/GoalList/GoalLis';

function App() {
  const [courseGoals , setcoursesGoal] =useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Learn react with typescript ...'},
  ]);
 
  const AddGoals = (newElement) => {
    // courseGoals.push(newElement);
    // console.log(courseGoals);
    setcoursesGoal(courseGoals.concat(newElement));
    // setcoursesGoal(prevcourseGoals =>  prevcourseGoals.concat(newElement));
  }
  return (
    <div className="App">
     <h1 className='tilte'> Goals  Tracker </h1>
     <AddGoal onAddGoal={AddGoals} />
     <GoalLis Goals={courseGoals} />
    </div>
  );
}

export default App;
