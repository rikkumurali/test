import React from 'react'
import Typography from '@mui/material/Typography'
// import './Form.css';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';


// const schema = yup.object().shape({

//     firstName: yup.string().required("First Name should be required please"),
//     lastName: yup.string().required(),
//     email: yup.string().email().required(),
//     age: yup.number().positive().integer().required(),
//     password: yup.string().min(4).max(15).required(),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),

// });



// const Form = () => {

//     const { register, handleSubmit, errors } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const submitForm = (data) => {
//         console.log(data);
//     };


//   return <>

//     <div className="Form">
//         <div className="title"><b>Sign Up</b></div>


// <div className="inputs">
//     <form onSubmit={handleSubmit(submitForm)}>

//         <input type="text" name="firstName" placeholder="First Name" ref={register} />
//         <p> {errors.firstName?.message} </p> 

//         <input type="text" name="lastName" placeholder="Last Name" ref={register} />
//         <p> {errors.lastName?.message} </p>

//         <input type="text" name="email" placeholder="E-mail"  ref={register} />
//         <p> {errors.email?.message} </p>

//         <input type="text" name="age" placeholder="Age" ref={register} />
//         <p> {errors.age?.message} </p>

//         <input type="password" name="password" placeholder="Password" ref={register} />
//         <p> {errors.password?.message} </p>
        
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" ref={register} />
//         <p> {errors.confirmPassword && "Passwords Should Match!.."} </p>
   
    
//     </form>

//          <button className='btn' type="submit"><b>submit</b></button>
//      </div>
//     </div>


const Form = () => {

    return <>
    <Typography variant="h2" backgroundColor="green" color="white" >I am fine....</Typography>


  </>;
}

export default Form;