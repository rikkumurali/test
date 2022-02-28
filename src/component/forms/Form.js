import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {

        e.preventDefault();
        const newEntry = { email:email, password:password };

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }

  return <>
 
   <form action=" " onSubmit={submitForm}>
    <div>
        <h2>Login Page</h2>
       
      <div>
        <label className='ltn' htmlFor="email"><b>E-mail</b></label>   
        <input type="text" name="email" id="email" placeholder="username" autoComplete="off"  value={email} 
        onChange={(e) => setEmail(e.target.value)} className='ctn' />
      </div> 

      <div >
        <label className='ltn' htmlFor="password"><b>Password</b></label>  
        <input type="password" name="password" id="password" placeholder="password" autoComplete="off" value={password} 
        onChange={(e) => setPassword(e.target.value)} className='ctn'/>
      </div> 
      
      </div>
        <button className='btn' type="submit"><b>Login</b></button>
    </form>
        <div>
            {
                allEntry.map((curElem) => {
                        return(
                            <div>
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p> 
                            </div>
                        )
                } )
            }
        </div>
        


   </>
}

export default Form;
