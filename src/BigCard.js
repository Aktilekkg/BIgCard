import React from 'react';
import Card from './Card'
import './Card.css'

function BigCard(props){
    return(
        <div className='container'>
            {props.bigcard.map(todo=>{
                return(
                    <Card todo={todo} key={todo.id}/>
                )
            })}
        </div>
    )
}
export default BigCard