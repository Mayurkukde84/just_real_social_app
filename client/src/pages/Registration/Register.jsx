import React,{useState} from "react";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import "./register.scss";
import socialimg from "../../asset/images/zachary-nelson-98Elr-LIvD8-unsplash.jpg";
const Register = () => {
    const [registerValue, setRegisterValue] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        repassword:''

    })


    const registerHandler = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setRegisterValue((preval) => {
          return {
            ...preval,
            [name]: value,
          };
        });
        
      };
     
   

    
  return (
    <div className="app_register">
      <div className="app_register_form">
   
        <div className="app_register_form2">
        <h1>Sing Up</h1>
        <p>create an account to start using JustReal</p>
        
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" style={{ border: "1px solid black " }} name='firstname' value={registerValue.firstname} onChange={setRegisterValue} />
          <FormLabel>Last Name</FormLabel>
          <Input type="text" style={{ border: "1px solid black " }} name='lastname' value={registerValue.lastname} onChange={setRegisterValue} />
          <FormLabel>Email</FormLabel>
          <Input type="text" style={{ border: "1px solid black " }} name='email' value={registerValue.email} onChange={setRegisterValue} />
          <FormLabel>Password</FormLabel>
          <Input type="text" style={{ border: "1px solid black " }} name='password'  value={registerValue.password} onChange={setRegisterValue} />
          <FormLabel>Re-enter password</FormLabel>
          <Input
            type="re-enter password"
            style={{ border: "1px solid black " }}
            name='text'
            value={registerValue.repassword}
            onChange={setRegisterValue}
          />
          
        </FormControl>
        
        <Button type="submit" colorScheme='blue' onClick={registerHandler}  >Submit</Button>
        <p>Sign up already? please <span> <a href="/" >Sing in</a></span></p>
        
        </div>
      </div>
      <div className="app_register">
        <img src={socialimg} alt="img" />
      </div>
    </div>
  );
};

export default Register;
