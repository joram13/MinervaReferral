import React, {useState} from 'react'
import './authform.css'
import validateEmailLogin from './validateEmailLogin'
import validatePasswordLogin from './validatePasswordLogin'
import {GoogleLogin} from 'react-google-login'


const LoginForm = () => {
//receiving input from the react form and passing the values through tests by 
//altering the state locally before flask is set up
    const {errorsEmail} = validateEmailLogin
    const {errorsPassword} = validatePasswordLogin
   const [emailLogin,setEmailLogin]=useState('')
   const [passwordLogin,setPasswordLogin]=useState('')

   const handleSubmitLogin = e => {
       e.preventDefault()


        let opts = {
          'email': emailLogin,
          'password': passwordLogin
        }


        fetch('/api/login', {
          method: 'post',
          body: JSON.stringify(opts)
        }).then(r => r.json())
          .then(token => {
            if (token.access_token){
            
              console.log(token)          
            }else {
              console.log("Please type in correct email/password")
            }
          }).catch(error => {
              console.log(error)
          })
        
      }
   
      const responseGoogle  = (response) =>{
        console.log("googlelogin")
      }

    return (
        <React.Fragment>
          <div style= {{ marginBottom: "20px", display: "flex", justifyContent: "center"}} ><GoogleLogin clientId = "" onSuccess = {responseGoogle} onFailure ={responseGoogle}/>
       
          </div>
          <div style={{display: "flex",justifyContent: "center", marginBottom: "10px"}}>
            <h3>
              Or
            </h3>
     
          </div>
            <form >
            <label htmlFor = "loginemail">Email</label>
            <input type = "email" id = 'loginemail' name = 'email' 
            value = {emailLogin || ''} onChange = {(e) => setEmailLogin(e.target.value)}/>
            {errorsEmail && <p>{errorsEmail}</p>}
            <label for = 'loginpassword'>Password</label>
            <input type = "password" id = "loginpassword" name = 'password' 
            value = {passwordLogin || ''}  onChange = {(e) => setPasswordLogin(e.target.value)}/>
            {errorsPassword && <p>{errorsPassword}</p>}
            <input type = 'submit' value ='Submit' className = 'submit' onClick = {handleSubmitLogin}/>
            </form>

        </React.Fragment>

    )
}

export default LoginForm
