## Steps to learn formik tutorial

### Created a normal form with 3 fieds

- Name, Email and Channel
- For each field I had label and input field

### Installed formik and got useFormik hook

- useFormik accepts initialValues object
- these values are the starting values of form

### Set initial values

- In useFormik hook, we set initial values of form
- this is an object holding key-value pairs
- keys should be the name prop of input fields - name, email and channel in this case

### Make Formik track our field values

- Step 1 is to add initialValues (previous step)
- Step 2 is to add onChange and the value prop on the input fields
- Now the formik will track the form changes. To see form values, use formik.values

### Take a look yourself - Form values

- Added a console log statement to view the formik values
- See how the values change on typing in the form
- formik.values is the current form values at any time (updated form)
- TILL NOW WE HAVE LEARNT HOW TO MANAGE THE FORM FIELD AND UPDATE THE FORM. NOW LETS SEE HOW TO SUBMIT THE FORM

### Submit the form

- 2 steps: 1. specify onSubmit={formik.handleSubmit} handler on form tag
- Step 2. Specify onSubmit prop on formik context. This is a function that gets value param which is formik.values
- When we submit the form, this onSubmit method (in useFormikContext) is executed
- For submit button, add type='submit' to avoid any warnings
- TIME TO LEARN FORM VALIDATION

### Validate the form

- We need to add 2 rules ( 1. All fields are Required. 2. Email must be valid)
- to the formik, we specify thrid property 'validate' just like initialValues and onSubmit
- this 'validate' is also a method like onSubmit that recieves values as args
- this is a function/method will have to satisfy some conditions for the formik to work

  #### Conditions

  - 1.  The validate function must return an object. Let's create an object and return it. Let's call that object 'errors'
  - 2.  The keys of this errors object must be same as the keys of values object
        We have - values.name, values.email and values.channel
        So we must have - errors.name, errors.email and errors.channel
  - 3.  the values of each field must be a string specifying the error itself of that field

- Refactored the formik values by moving the formik object values on top level of code. This is just for readability

### Formik validation errors

- Similar to formik.values, formik (validate function) provides formik.errors
- Let's console.log to the screen and see
- Now we can use this error object and display the error in jsx conditionally
- ONE PROBLEM AT THIS POINT IS, IF WE GET RID OF ONE ERROR, ALL OTHER FIELDS WHICH ARE NOT YET TOUCHED SHOW THE ERROR. LET'S TACKLE THAT NEXT

### Touched fields

- We need to show error message (if any) on only the touched or visited field
- We can use 'onBlur' prop = {formik.handleBlur} on each input field
- This handleBlur data is stored in the object called 'touched' inside useFormikContext like formik.values and formik.errors
- We can use this formik.touched to display error message in UI for that particular field
- So now we check for two conditions. If there's an error in the field and also if the field is touched then only we display error on that field.

### Yup library - Alternate way of writing validation rules in formik

- Install yup
- We are not going to understand how yup works. Instead, we see how to rewrite our validation rules with yup
- First step with Yup is to write our Validation Schema Object. this is what yup is for
- I commented validate method in formik and added validateSchema. This is neat
- NOW, WE HAVE HANDLED FORM VALUES, FORM SUBMISSIONS AND FORM VALIDATION(WITH AND WITHOUT YUP), BUT WE CAN ENHANCE MORE USING FORMIK BUILT-IN STUFF. LET'S SEE HOW FURTHER

### Refactoring Code (getting rid of repeatitive code) with getFieldProps

- If you look at three input fields, we have repeatitive code where each field has onBlur, onChange and value. onBlur and onChange are same in all three and value takes the name prop
- So we can get rid of these 3 props and add a single prop {...formik.getFields('${name of the field}')}

### More simplification using Formik Provider

- If you look at the form, we still use formik.getFieldsProp and pass the field 'name' attribute
- Let's leverage what formik offers more
- We can use 'Formik' provider (replacement of useFormik hook), Form, Field and ErrorMessage

  #### Steps to modify our code

  ##### Formik Component

  - Import {Formik} from formik
  - Comment/delete the useFormik hook
  - Wrap the entire for with Formik component
  - Provide the props to Formik component. These are the same props we used to get from useFormik hook

    - This Formik component is now acting as the provider to other 3 components we will be using which are Form, Field and ErrorMessage

    ##### Form Component

  - Import Form from formik and Replace 'form' with 'Form'
  - Remove onSubmit prop on Form. Form can automatically do this

    ##### Field Component

  - Import Field component from 'formik'
  - Replace each input tag with Field component
  - Now we can get rid of getFieldProps helper method in each Field

    Field does 3 things

    - It will hook up values to Formik component
    - It uses name attribute to match up formik state
    - It will by default render input field

    ##### ErrorMessage Component

    Currently we see that there is a pattern to render the error. If there is an error and if the field is touched then the error is rendered. We can avoid this repeatition as follows

    - Import ErrorMessage from 'formik'
    - Replace the error checking block with ErrorMessage component and pass in the name prop of the field
    - At this point the styling will be off
