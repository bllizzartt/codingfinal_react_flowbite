import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import Form from './Form';
import Example from './Navbar';

function App() {


        //state //setState
  const [route, setRoute] = useState('home');

    function changeRoute(){
    if(route === 'home'){
      setRoute('other')
    }
    if(route !== 'home'){
      setRoute('home')
    }
    }


  if(route === 'home'){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
          THIS IS HOME
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button handleClick={changeRoute} />
          <Form/>
        </header>
      </div>
    )
  }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
       OTHER PAGE
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Button handleClick={changeRoute}  />
    </header>
 
  </div>
  );


  
}

export default App;
