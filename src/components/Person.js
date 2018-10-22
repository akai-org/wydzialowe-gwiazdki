import React from 'react';

const Person = (props) =>{
    return(
        <div>
{props.profession} {props.name} {props.surname}
        </div>
    )
}

export default Person;