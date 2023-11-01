import { useState } from "react"
import Input from "./formField/Input"

function App() {
  const [values, setValues] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const formFields = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      required:true,
      label:"Username",
      pattern: "^[A-za-z0-9]{3,16}$",
      errorMsg:"username Should b 3-16 chr and aho"
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      required:true,
      label:"Email",
      errorMessage: "It should be valid email address!",
    },
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"Password",
      required:true,
      label:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    },
    {
      id:4,
      name:"confirmPassword",
      type:"password",
      placeholder:"ConfirmPassword",
      required:true,
      label:"ConfirmPassword",
      pattern: values.password,
      errorMessage: "Password don't match!",
    }
  ]

  const onChange=(e)=>{
    setValues({...values, [e.target.name]:e.target.value } );
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map((field)=>{
          return <Input key={field.id} {...field} onChange={onChange}
            value={values[field.name]}
          />
        })}
        <button className="button" type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
