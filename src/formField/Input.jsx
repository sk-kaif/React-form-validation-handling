import { useState } from 'react'
import './style.css'

const Input = ({id,pattern ,errorMsg, name,required,type,placeholder,label,onChange}) => {
    const [focused, setFocused] = useState(false)
  return (
    <div className='inputField'>
        <label>{label}</label>
        <input 
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            required={required}
            pattern={pattern}
            autoComplete='off'
            onChange={onChange}

            // on blur will called when we click outside the input
            onBlur={() => setFocused(true)}  

  
            // foused inital vla is false
            focused={focused.toString()}      
        />
        <span>{errorMsg}</span>
    </div>
  )
}

export default Input