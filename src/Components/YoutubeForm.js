import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

function YoutubeForm() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
    },
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

          <ErrorMessage name='name' component={TextError} />
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

          <ErrorMessage name='email' component={TextError} />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field
            type='text'
            id='channel'
            name='channel'
            placeholder='Youtube channel name'
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            // values={formik.values.channel}
            // {...formik.getFieldProps('channel')}
          />

          {/* The below code block is replaced by ErrorMessage */}

          {/* {formik.errors.channel && formik.touched.channel && (
            <div className='error'>{formik.errors.channel}</div>
          )} */}
          <ErrorMessage name='channel' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments' />
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          {/* render prop pattern */}
          <Field name='address'>
            {(props) => {
              return (
                <div>
                  <input type='text' id='address' {...props.field} />
                  {/* props.field will take care of handleChange, handleBlur etc. We can make use of meta to render error */}
                  {props.meta.error && props.meta.touched && (
                    <div className='error'>{props.meta.error}</div>
                  )}
                </div>
              )
            }}
          </Field>

          <div className='form-control'>
            <label htmlFor='facebook'>Facebook</label>
            <Field type='text' id='facebook' name='social.facebook' />
          </div>

          <div className='form-control'>
            <label htmlFor='twitter'>Twitter</label>
            <Field type='text' id='twitter' name='social.twitter' />
          </div>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
