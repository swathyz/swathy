
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
  const Navigate = useNavigate();
  return (
    <div className='navigation nav_bar'>
      <button className="front_page_button business_login">Business login</button>
        <button className="front_page_button login"onClick={()=>{
          Navigate('csignin')

        }}>Login</button>
        <button className="front_page_button sign_up">Sign up</button>
        <text className="text">WedEase</text>

    </div>
  )
}

export default NavigationBar
