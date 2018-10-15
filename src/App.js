import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component   {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Wydzialowe gwiazdki</h1>
          <Header title="abc"/>
          <ComponentTwo />
        </header>

      </div>
    );
  }
}

/*const ComponentOne = ( props   ) => {
  return (
    <div>
    
    <h1>Tytuł {props.name}</h1>
    
    </div>
  )
}*/
const ComponentTwo = () =>{
  return (
    <div>
      <h1>Tekst 1</h1>
      <h2>Test 2</h2>
    </div>
  )
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      currentDate: "15.10.2018"}
  }
  render() {
    return (
      <h1>{this.state.currentDate }</h1>
    //<ComponentOne name="tytul"/>
    )
   }
}
export default App;

