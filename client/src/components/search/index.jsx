import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './index.scss'

const Search = ({setPlant}) => {
    const[name,setName]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/plants')
        setName( await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    
const handleSearch=(e)=>{
    let newList = name.filter((el)=>
    el.name
    .toLocaleLowerCase()
    .includes(e.target.value.toLocaleLowerCase())
    )
    setPlant(newList)
}

  return (
    <div id='input'>
        <input type="text" className='input' onChange={(e)=>handleSearch(e)} placeholder='Search for your favorite plant'/>
    </div>
  )
}

export default Search