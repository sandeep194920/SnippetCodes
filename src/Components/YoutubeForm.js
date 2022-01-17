import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YoutubeForm() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
  }
  const onSubmit = (values) => {
    console.log('The sumbited form', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    channel: Yup.string().required('Channel is required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            {...formik.getFieldProps('name')}
          />
          {formik.errors.name && formik.touched.name && (
            <div className='error'>{formik.errors.name}</div>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // values={formik.values.email}
            {...formik.getFieldProps('email')}
          />

          {formik.errors.email && formik.touched.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // values={formik.values.channel}
            {...formik.getFieldProps('channel')}
          />

          {formik.errors.channel && formik.touched.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
