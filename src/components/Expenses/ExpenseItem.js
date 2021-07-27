import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'
import React, { useState } from 'react';
// useState is a function provided by React library
// - allows us to define values as state where changes to these values should reflect 
// in the component function being called again
// useState is a React hook
// all hooke start with the word use
// ---------------------------------------------------------------------------------------
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log("ExpenseItem evaluated by React!");
    // let title = props.title;

    // const clickHandler = () => {
    //     // title = 'updated!!!';
    //     setTitle("Updated Title");
    //     console.log(title);
    // }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;