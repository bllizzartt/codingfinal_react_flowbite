import React, { Component } from 'react'
import './App.css';

class Form extends Component {
  render() {
    return (
      <form>  
        <div>    
          <label>           
            Email:
            <input className='loginFont' type="email"/>         
          </label>  
        </div>  
        <div>
          <label>           
            Password:
            <input className='loginFont' type="password"/>         
          </label>  
        </div> 
        <div>          
          <input type="submit" value="Login" />  
        </div>         
      </form>
        // onClick={}
    )
  }
}

export default Form