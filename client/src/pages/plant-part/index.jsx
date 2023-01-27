import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom'
import Search from '../../components/search'


const Plants = () => {
    const[plant,setPlant]=useState([])
    const[toggle,settoggle]=useState(true)

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/plants')
        setPlant( await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    
const handleSort=(Obj)=>{
    settoggle(!toggle)
    if(toggle){
        const sort = Obj.sort((a,b)=>Number(a.price)-Number(b.price))
        setPlant([...sort])
    }else{
        getData()
    }
}

  return (
    <div className='plantPart'>
        <div className='title'>
                <h4>Devoted to wonderful beauty</h4>
                <h1>Flowers Pricing</h1>
            <button onClick={()=>handleSort(plant)}>Sort by price</button>
            </div>
            <Search setPlant={setPlant}/>
        <div className='all'>
            
            {plant.map((el)=>{
                return(
                    <div className='allCard'>
                       <Link to={`home-page/${el._id}`}>
                       <div className='card'>
                            <div className='cardImg'><img src={el.img} alt="" /></div>
                            <div className='cardText'>
                                <h1>{el.name}</h1>
                                <h3>{el.price} $</h3>
                            </div>
                        </div>
                       </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Plants