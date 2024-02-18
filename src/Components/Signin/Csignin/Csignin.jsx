import React from 'react'
import './Csignin.css'
const Csignin = () => {
  return (
    <div className="header">
        
        
    <nav className="navigation nav_bar">
        <div className="logo">
        <div className="logos"    > WEDEASE<br/>Wedding Management System</div>
        </div>
        <div className="button div">
            <button className="button">YOUR WEDDING MANAGER    <i className=  "fas fa-bars text-white fa-lg" ></i></button> 
          </div>
         
     </nav>
     <div>

    
        
           
     
    
     <div className="container" >
            <button className="home">HOME <i className="fa fa-home"></i></button>
            <button className="guest">GUEST LIST<i className="fas fa-user-check"></i></button>
            <button className="budget">BUDGET<i className="fa fa-home"></i></button>
            <button className="checklist">CHECK LIST <i className="fa fa-home"></i></button>
            <button className="shortlist">SHORT LIST<i className="fa fa-home"></i></button>
            <button className="advices">ADVICES<i className="fa fa-home"></i></button>
    
    
           
    
         </div>

         <div className="loginsection">

            <div className="logsec">

                <div className="backlog">

                <p className="text">LOGIN YOUR ACCOUNT</p><br/>

                <div className="input_container">
                    <label htmlFor="emailTextbox"></label>
                <input type="text" id="emailTextbox"placeholder="Enter email Adress" className="textbox" /> <br/>

                <label htmlFor="password text box"></label>
                <input type="password"id="password text box"placeholder="Enter Password" className="password" /><br/><br/>

                <button className="submit"> LOGIN</button><br/><br/>
                <div className="forgotpass">Forgot Password?</div>

                <div className="donthaveawedeaseaccount">Dont have a WEDEASE account ?<div  className="signup">  signup</div></div>
                
                </div>

                </div>
               
     

            </div>

            </div>

         </div>
     </div>
      
     
    

        
  )
}

export default Csignin
