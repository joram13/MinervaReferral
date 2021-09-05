import React, { useState } from 'react'
//import useFormReg from './useFormReg'
import validateRegisterName from './validateRegisterName'
import './authform.css'
import validateRegisterEmail from './validateRegisterEmail'
import validateRegisterPassword from './validateRegisterPassword'

const RegisterForm = () => {
  //receiving input from the react form and passing the values through tests by 
  //altering the state locally before flask is set up
  const { errorsName } = validateRegisterName
  const { errorsEmail } = validateRegisterEmail
  const { errorsPassword } = validateRegisterPassword
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()


    let opts = {
      'name': fullname,
      'email': email,
      'password': password
    }


    fetch('/api/register', {
      method: 'post',
      body: JSON.stringify(opts),

    }).then(r => r.json()).catch(error => {
      console.log(error)
    })

    validateRegisterName(fullname)
    validateRegisterEmail(email)
    validateRegisterPassword(password, confirmpassword)
  }

  return (
    <React.Fragment>
      <form className='form-class'>
        <label htmlFor="fullname">Full name</label>
        <input type="text" id="fullname" name='fullname' value={fullname} onChange={e => setFullname(e.target.value)} />
        {errorsName && <p>{errorsName}</p>}
        <label htmlFor='email'>Email</label>
        <input type='text' id="email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
        {errorsEmail && <p>{errorsEmail}</p>}
        <label htmlFor='password'>Password</label>
        <input type="password" id="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
        {errorsPassword && <p>{errorsPassword}</p>}
        <label htmlFor="confirmpassword">Confirm password</label>
        <input type="password" id="confirmpassword" name='confirmpassword'
          value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} />
        {errorsPassword && <p>{errorsPassword}</p>}
        <input value="Submit" type='submit' className='submit' onClick={handleSubmit} />
      </form>

    </React.Fragment>
  )
}

export default RegisterForm
