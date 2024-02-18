import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div className="our_services">

  
      <div className="our_services_text">OUR SERVICES</div>  
      
      <div className="catogories-serviece-secton">


            
<div className="card">
    <div className="text_and_image_for_catogories">
    <img src='swathy/HOME PAGE (1ST PAGE)/8541853_home_icon.png'  />
    <span className="title_in_catogories">VENUE</span>

</div>

    <div className="card__content">
      <p className="card__title">VENUE</p>
      <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>

  
  <div className="card">
    <div className="text_and_image_for_catogories">
    <img src='swathy/HOME PAGE (1ST PAGE)/7830743_camera_flash_icon.png' />
        <span className="title_in_catogories">PHOTOGRAPHERS</span>

    </div>
    <div className="card__content">
      <p className="card__title">PHOTOGRAPHERS</p>
      <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>

  <div className="card">
    <div className="text_and_image_for_catogories">
       <img src='swathy/HOME PAGE (1ST PAGE)/5481161_dinner_dish_plate_restaurant_icon.png'/>
        <span className="title_in_catogories">CATERING</span>

    </div>
    <div className="card__content">
      <p className="card__title">CATERING</p>
      <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>

  
  <div className="card">
    <div className="text_and_image_for_catogories">
       <img src='swathy/HOME PAGE (1ST PAGE)/9035723_car_sport_sharp_icon.png'/>
        <span className="title_in_catogories">RENTAL SERVICES</span>

    </div>
    <div className="card__content">
      <p className="card__title">RENTAL SERVICES</p>
      <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>

  
</div>




<div className="show_more_button_main">





</div>

<div className="show_more_button">
    



<button className="button_for_show_more">
    <p>Show more</p>
     <svg 
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </button>
    
</div>
    
    

  </div>

  )
}

export default Categories
