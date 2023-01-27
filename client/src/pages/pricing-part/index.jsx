import React from 'react'
import './index.scss'
const PricingPart = () => {
  return (
    <div id='pricePart'>
        <div className='pricePart'>
            <div className='title'>
                <h4>Devoted to wonderful beauty</h4>
                <h1>Events Pricing</h1>
            </div>
                <div className='cardPart'>
                    <div className='card'>
                        <div className='cardMain'>
                        <h1><span>$16</span> per table</h1>
                        <h3>Birthday Events</h3>
                        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                        <button>Shop Now</button>
                        </div>
                    </div>
                    <div className='card'>
                       <div className='cardMain'>
                       <h1><span>$31</span> per table</h1>
                        <h3>Wedding Events</h3>
                        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                        <button>Shop Now</button>
                       </div>
                    </div>
                    <div className='card'>
                      <div className='cardMain'>
                      <h1><span>$52</span> per table</h1>
                        <h3>Party Events</h3>
                        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                        <button>Shop Now</button>
                      </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default PricingPart