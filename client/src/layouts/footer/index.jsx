import React from 'react'
import './index.scss'
const Footer = () => {
  return (
    <div id='footer'>
        <div className='footer'>
            <div className='logoAndInput'>
                <div className='logo'><img src="src/images/logo.png" alt="" /></div>
                <div className='input'>
                    <input type="text" placeholder='Enter you E-mail'/>
                    <button>Send</button>
                </div>
            </div>
            <div className='links'>
               <div className='part1'>
               <h1>About</h1>
                <h3>About Us</h3>
                <h3>Our Partners</h3>
                <h3>Our Services</h3>
               </div>
               <div className='part2'>
               <h1> Contact</h1>
                <h3>Contact Us</h3>
                <h3>FAQ Page</h3>
                <h3>About Me</h3>
               </div>
            </div>
            <div className='follow'>
                <h1>Follow Us</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer