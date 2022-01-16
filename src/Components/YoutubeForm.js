import React from 'react'
import { useFormik } from 'formik'

function YoutubeForm() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
  }
  const onSubmit = (values) => {
    console.log('The sumbited form', values)
  }
  const validate = (values) => {
    // FYI, we have    values.name   values.email     values.channel
    // we must have    errors.name   errors.email     errors.channel
    let errors = {}
    if (!values.name) errors.name = 'Required'
    if (!values.channel) errors.channel = 'Required'
    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email format'
    }
    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  console.log('Visited fields', formik.touched)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            values={formik.values.email}
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            values={formik.values.channel}
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
