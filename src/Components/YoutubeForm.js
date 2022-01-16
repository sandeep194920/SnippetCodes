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
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        values.email
      )
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

  console.log('Formik errors', formik.errors)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={formik.handleChange}
          values={formik.values.email}
        />

        <label htmlFor='channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          onChange={formik.handleChange}
          values={formik.values.channel}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
