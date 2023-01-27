import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
import {Helmet} from "react-helmet";

const Detail = () => {
    const[detail,setDetail]=useState([])
    const{_id}= useParams()
    const navigate = useNavigate()
    const getData=async()=>{
        let data = await axios.get(`http://localhost:8000/plants/${_id}`)
        setDetail( await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    

    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8000/plants/${_id}`)
        let newData = detail.filter((q)=> q._id !== _id)
        setDetail(newData)
    }

  return (
    <div className='detailPart'>
                     <Helmet>
        <meta charSet="utf-8" />
        <title>Detail Page</title>
      </Helmet>
       <div className='main'>
       <div className='detailImg'><img src={detail.img} alt="" /></div>

<div className='detailText'>
    <h1><span>Name:</span> <br /> {detail.name}</h1>
    <p> <span>Description:</span> <br /> {detail.descripton}</p>
    <h3><span> Price:</span> <br />{detail.price} $</h3>
    <div className='button'>
        <button className='delete' onClick={()=>handleDelete(_id,navigate('/'))}>Delete</button>
        <button onClick={()=>navigate('/')} className='back'>Go Back</button>
    </div>
</div>
       </div>
    </div>
  )
}

export default Detail