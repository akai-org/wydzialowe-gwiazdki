import React from 'react';

const Person = (props) =>{

    return(
        <div>
      <b><small>{props.profession}</small></b>
      <br /> {props.name}  {props.surname}    <br />
     

        </div>
    )
}

export default Person;