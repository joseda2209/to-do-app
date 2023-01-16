import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch () {

    const toSearch = (event) => {
        console.log(event.target.value);

    }


    return(
        <input 
        className='TodoSearch' 
        placeholder='Cebolla'
        onChange={toSearch}
        />
    );
}

export {TodoSearch}