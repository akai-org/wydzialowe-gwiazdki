import React from 'react';

const Person = (props) =>{
    return(
        <div>
            <p>Imie: {props.name}</p>
            <p>Nazwisko: {props.surname}</p>
            <p>Funkcja: {props.function}</p>
        </div>
    )
}

export default Person;