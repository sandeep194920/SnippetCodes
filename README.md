## Steps to learn formik tutorial

### Created a normal form with 3 fieds

- Name, Email and Channel
- For each field I had label and input field

### Installed formik and got useFormikContext

- useFormik accepts initialValues object
- these values are the starting values of form

### Set initial values

- In useFormik hook, we set initial values of form
- this is an object holding key-value pairs
- keys should be the name prop of input fields - name, email and channel in this case

### Make Formik track our field values

- Step 1 is to add initialValues (previous step)
- Step 2 is to add onChange and the value prop on the input fields
- Now the formik will track the form changes
