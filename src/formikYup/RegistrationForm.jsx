import  '../formField/style.css'
import { useFormik } from 'formik'
import { signUpSchemas } from '../schemas/xyz'


const initialValues = { 
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const RegistrationForm = () => {

    const {values,touched,errors, handleBlur, handleChange,handleSubmit} = useFormik({
        initialValues: initialValues,

        // step 6 ab formik ko batao k bhai yup k sth valid kro
        validationSchema : signUpSchemas,

        onSubmit : (val,action)=>{
            console.log(val);

            // for to clear inputs after the submit click
            action.resetForm()
        }
    })
    





  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="inputField">

        <label htmlFor="name">Name</label>
        <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} name="name" id="name" />
        <span>{errors.name && touched.name ? errors.name : null}</span>


        <label htmlFor="email">Email</label>
        <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" id="email" />
        <span>{errors.email && touched.email ? errors.email : null}</span>



        <label htmlFor="password">Password</label>
        <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" id="password" />
        <span>{errors.password && touched.password ? errors.password : null}</span>



        <label htmlFor="confirmPassword">confirmPassword</label>
        <input type="password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} name="confirmPassword" id="confirmPassword" />
        <span>{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}</span>


        <button type='submit' className='button'>Submit</button>

    </div>

    </form>
    </>
  )
}

export default RegistrationForm