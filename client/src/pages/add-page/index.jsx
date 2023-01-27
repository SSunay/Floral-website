import React from 'react'
import { Formik, Form, Field } from 'formik';
import './index.scss'
import { AddNewProducts } from './schema';
import axios from 'axios';
import {Helmet} from "react-helmet";          <Helmet>
<meta charSet="utf-8" />
<title>Add Page</title>
</Helmet>

const AddPage = () => {
  return (
    
    <div className='add'>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
    <h1>ADD NEW PRODUCT</h1>
    <Formik
      initialValues={{
        name: '',
        descripton: '',
        price: '',
        img: '',
      }}
      validationSchema={AddNewProducts}
      onSubmit={(values,{resetForm}) => {
       axios.post('http://localhost:8000/plants',values)
       resetForm()
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="Enter product's name"/>
          {errors.name && touched.name ? (
            <div className='err'>{errors.name}</div>
          ) : null}<br/><br />
    
          <Field name="descripton" placeholder="Enter product's descripton"/>
          {errors.descripton && touched.descripton ? (
            <div  className='err'>{errors.descripton}</div>
          ) : null}<br/><br />
    
          <Field name="price" placeholder="Enter product's price"/>
          {errors.price && touched.price ? (
            <div  className='err'>{errors.price}</div>
          ) : null}<br/><br />
    
          <Field name="img" placeholder="Enter product's image (Just Link !!!)"/>
          {errors.img && touched.img ? (
            <div  className='err'>{errors.img}</div>
          ) : null}<br/><br />
    
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default AddPage