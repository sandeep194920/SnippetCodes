import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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

  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     // validate,
  //     validationSchema,
  //   })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field
            type='text'
            id='name'
            name='name'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // {...formik.getFieldProps('name')}
          />
          {/* The below code block is replaced by ErrorMessage */}

          {/* {formik.errors.name && formik.touched.name && (
            <div className='error'>{formik.errors.name}</div>
          )} */}

          <ErrorMessage name='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field
            type='email'
            id='email'
            name='email'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // values={formik.values.email}
            // {...formik.getFieldProps('email')}
          />

          {/* The below code block is replaced by ErrorMessage */}

          {/* {formik.errors.email && formik.touched.email && (
            <div className='error'>{formik.errors.email}</div>
          )} */}

          <ErrorMessage name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            id='channel'
            name='channel'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // values={formik.values.channel}
            // {...formik.getFieldProps('channel')}
          />

          {/* The below code block is replaced by ErrorMessage */}

          {/* {formik.errors.channel && formik.touched.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )} */}
          <ErrorMessage name='channel' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
