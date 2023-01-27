import React from 'react'
import './index.scss'
const TeamPart = () => {
  return (
    <div id='teamPart'>
        <div className='teamPart'>
            <div className='title'>
                <h4>Contacts</h4>
                <h1>Our Team</h1>
            </div>
           <div className='main'>
           <div className='person'>
                <div className='personImg'><img src="src/images/port1.jpg" alt="" /></div>
                <div className='personText'>
                    <h1>Velva Kopf</h1>
                    <h4>Biologist</h4>
                </div>
            </div>
            <div className='person'>
                <div className='personImg'><img src="src/images/port2.jpg" alt="" /></div>
                <div className='personText'>
                    <h1>Sarah Palmer</h1>
                    <h4>Florist</h4>
                </div>
            </div>
            <div className='person'>
                <div className='personImg'><img src="src/images/port3.jpg" alt="" /></div>
                <div className='personText'>
                    <h1>Jessica Swift</h1>
                    <h4>Photographer</h4>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default TeamPart