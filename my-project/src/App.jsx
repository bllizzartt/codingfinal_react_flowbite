import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import ButtonPills from './ButtonPills';
import Form from './Form';
import Navbar from './Navbar';
import Floating from './Floating.jsx'
import GradientOutline from './GradientOutline';
import Tables from './Tables';

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

<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Editeer we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Learn more
    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>

<br />
        
          <p>Here we have created round edged buttons with various colors</p>
          <Button handleClick={changeRoute} />
          <br />
          <p>Here we have created pill buttons with various colors</p>
          <ButtonPills/>
          <br />
          <p>Here are gradient outline buttons</p>
          <GradientOutline/>

          <br />

          <p>Now let us dive into forms</p>

          <br />

          <p>Here is our first form. This can be used for simple logins or signups</p>

          <Form/>
          <p>Here is another way that we can implement forms into your website. 
            This will be used for more informational data. An example of this would be if you were putting in your information for personal info and shipping.</p>
          <br />
          <Floating/>

          <br />

          <p>Here we have Tables. This can be used for price breakdowns and comparisons for sites.</p>
          <Tables/>
        
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
