import React from 'react';

const Header = (pros) => {
  return(
    <div class="header">
      <img src={require('./logo2.png')} alt="logo" class="logo"/>
      <h1>{pros.title}</h1>  
    </div>
  )
}
export default Header 