import React,{useState} from 'react'

const SignIn = () => {
    const [selectInput , setSelectInput] = useState({
        user:'',
        password:'',
    })
    const signinHandler = (e) =>{
        const {name,value} = e.target;
        setSelectInput((preval)=>{
            return{
                ...preval,
                [name]: value,
            }
        })
    }
    console.log(selectInput)
  return (
    <>
        
            <input type='text' placeholder='user' name='user' value={setSelectInput.user} onChange={signinHandler}   />
            <input type='text' placeholder='paasword' name='password' value={setSelectInput.password} onChange={signinHandler}  />
            <button onClick={signinHandler} >Submit</button>
      
    </>
  )
}

export default SignIn