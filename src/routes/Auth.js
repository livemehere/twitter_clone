import React, { useState } from 'react';

const Auth = () => {
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");

        const onChange = (event)=>{
           const {target:{name,value}} = event;
           if(name === 'email'){
                   setEmail(value);
           }else if(name==='password'){
                   setPassword(value);
           }
        }
        const onSubmit = (event)=>{
            event.preventDefault();
            console.log(event);
        }

        return (
        <div>
          <form onSubmit={onSubmit}>
            <input name='email' type="text" placeholder='Email' required value={email} onChange={onChange}/>
            <input name='password' type="text" placeholder='Password' required value={password} onChange={onChange}/>
            <input type="submit" value='login'/>
          </form>
          <div>
             <button>Continue with Google</button>
          </div>
        </div>
        );
        
}

export default Auth;