import React from 'react'
import './index.scss'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id='navbar'>
        <div className='navbar'>
            <div className='logo'><NavLink to={'/'}><h1>Floral Studio</h1></NavLink></div>
            <div className='link'>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>About us</NavLink></li>
                    <li><NavLink to={'/'}>Portfolio</NavLink></li>
                    <li><NavLink to={'/'}>Pricing</NavLink></li>
                    <li><NavLink to={'/'}>Contacts</NavLink></li>
                    <li><NavLink to={'/add-page'}>Add new products</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
  




}

export default Header