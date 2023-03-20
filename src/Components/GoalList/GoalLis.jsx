
import React from 'react';
import "./GoalList.css"

const GoalLis = ({Goals}) => {
    return (
        Goals.map((ele,index) => 
            <li key={index} className='component'> {ele.text}</li>
        )
    )
}

export default GoalLis ;