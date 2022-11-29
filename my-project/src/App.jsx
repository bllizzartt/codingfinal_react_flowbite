import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import ButtonPills from './ButtonPills';
import Form from './Form';
import Navbar from './Navbar';
import Floating from './Floating.jsx'
import GradientOutline from './GradientOutline';

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
        <Navbar/>
        <header className="App-header">
          <h1>Welcome to Edit Tree</h1>

  
        
          <p>here is a description for Button</p>
          <Button handleClick={changeRoute} />
          <p>here is a new description for button ButtonPills</p>
          <ButtonPills/>
          <p>Here is more text talking about Gradient Outline Buttons</p>
          <GradientOutline/>

          <br />

          <p>Now let us dive into forms</p>

          {/* <br />

          <p>Here is our first form. This can be used for simple logins or signups </p>

          <Form/>
          <p>Here is another way that we can implement forms into your website. 
            This will be used for more informational data. An example of this would be if you were putting in your information for personal info and shipping.</p>
          <Floating/> */}
        
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
