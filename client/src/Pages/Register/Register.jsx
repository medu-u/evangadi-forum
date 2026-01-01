import React from 'react'
import axios from '../../axiosConfig'
import { useRef } from 'react';
const Register = () => {
    const userNameDom = useRef();
    const firstNameDom = useRef();
    const lastNameDom = useRef();
    const emailDom = useRef();
    const passwordDom = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/user/register', {
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });
            
        } catch (error) {
            console.log(error.response)

            
        }
    };
  return (
    <section>
        <form action="" onSubmit={handleSubmit}>
<div>
    <span>username : </span>
    <input type="text" placeholder='username' ref={userNameDom} />
</div>
<br />
<div>
    <span>First Name : </span>
    <input type="text" placeholder='first name'/>
</div>
<br />
<div>
    <span>Last Name : </span>
    <input type="text" placeholder='last name'/>
</div>
<br />
<div>
    <span>Email : </span>
    <input type="email" placeholder='email'/>
</div>
<br />
<div>
    <span>Password : </span>
    <input type="password" placeholder='password'/>
</div>

<button type='submit'>Register</button>
        </form>
      
    </section>
  );
}

export default Register
