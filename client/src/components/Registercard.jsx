import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Registercard.css';
function RegisterCard() {
    
    return (
        <>
         <div className="register-card">
            <form>
                <h2>Register</h2>
               
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input className="form-control" placeholder="Enter your name" type="text" name="name" required  />
                    </div>
                    <div  className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input className="form-control" placeholder="Enter your email" type="email" name="email" required />
                    </div>
                    <div  className='form-group'>  
                        <label htmlFor="password">Password</label>
                        <input className="form-control" placeholder="Enter your password" type="password" name="password" required />
                    </div>
                    <div  className='form-group'>  
                        <label htmlFor="password">Confirm password</label>
                        <input className="form-control" placeholder="Confirm your password" type="password" name="password" required />
                    </div>
                    <div className="submitbtn">
                        <button type="submit" id="btn">Submit</button>
                    </div>
                
                
                
                
              
            </form>
        </div>
        </>
       
    );
}


export default RegisterCard;
