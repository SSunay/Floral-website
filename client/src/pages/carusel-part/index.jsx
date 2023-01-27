import React from 'react'
import { Carousel } from 'antd';
import './index.scss'
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
  };
const CaruselPart = () => {
  return (
    <div id='carusel'>
         <Carousel autoplay>
    <div className='carusel1'>
      <div style={contentStyle} className='caruselText1'>
        <div className='text'>
        <h4>Flora</h4>
        <h1>Excellent bouquets for you</h1>
        </div>
      </div>
    </div>
    <div className='carusel2'>
      <div style={contentStyle} className='caruselText2'>
      <div className='text'>
        <h4>Flora</h4>
        <h1>Excellent bouquets for you</h1>
        </div>
      </div>
    </div>
    <div className='carusel3' >
      <div style={contentStyle} className='caruselText3'>
      <div className='text'>
        <h4>Flora</h4>
        <h1>Excellent bouquets for you</h1>
        </div>
      </div>
    </div>
  </Carousel>
</div>
  )
}

export default CaruselPart