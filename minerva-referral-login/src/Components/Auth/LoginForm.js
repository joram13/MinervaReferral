import React from 'react'
import './authform.css'

const LoginForm = () => {

  return (
    <React.Fragment>
      <form method="post">
        <label htmlFor="loginemail">Email</label>
        <input type="email" id='loginemail' name='email' />
        <label for='loginpassword'>Password</label>
        <input type="password" id="loginpassword" name='password' />
        <input type='submit' value='login' className='submit' />
      </form>
    </React.Fragment>

  )
}

export default LoginForm
