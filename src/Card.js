import React from 'react';

function Card({ todo }) {
    return (
        <div className='box'>
            <span></span>
            <div className='content'>
                <h2>{todo.h2}</h2>
                <p>{todo.p}</p>
                <a>{todo.a}</a>
            </div>
        </div>
    )
}
export default Card