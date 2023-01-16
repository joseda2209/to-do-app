import React from 'react'
import '../styles/CreateTodoButton.css'

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button 
            className='CreateTodoButton'
            onClick={() => onClickButton('Aqui debe aparecer el modal')}
        >
            +
        </button>
    );
}

export {CreateTodoButton}