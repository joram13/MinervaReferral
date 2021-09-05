import React, {useState} from 'react';
import '../Components/Auth/login.css';
import LoginForm from '../Components/Auth/LoginForm';
import RegisterForm from '../Components/Auth/RegisterForm';
import {useSpring, animated} from 'react-spring';



const Login = () => {
    // State controller to toggle between login form and registration form
    const [registrationFormStatus, setRegistrationFormStatus] = useState(false);

    //Props that change teh opacity and position when the form boolean value changes in the state
    const loginProps = useSpring ({
        
        left: registrationFormStatus ? -430 : 0,
        opacity: registrationFormStatus ? 0 : 1
    })

    const registerProps = useSpring ({
        left: registrationFormStatus ? 0 : 430,
        opacity: registrationFormStatus ? 1 : 0
    })

    //Toggle between the forms by making the form that is not in use transparent
    const loginBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 0px transparent' : 'solid 2px #ffffff'})
    const regBtnProps = useSpring({borderBottom: registrationFormStatus ? 'solid 2px #ffffff' : 'solid 0px transparent'})
    //Toggle between the login and register forms using loginProps and RegisterProps which just move the elements aside
    // and make them transparent when not clicked
    function registerClicked() { setRegistrationFormStatus(true)}
    function loginClicked() { setRegistrationFormStatus(false)}

    return (
        <div className = "body">
        <div className="login-register-wrapper">

            <div className = 'nav-buttons'>
                <animated.button onClick = {loginClicked} id = "loginBtn" className = "active" type = 'primary' style = {loginBtnProps}>Login</animated.button>
                <animated.button onClick = {registerClicked} id = "registerBtn" type = 'primary' style = {regBtnProps}>Register</animated.button>
            </div>

            <div className = "form-group">
                <animated.form action = '' id = 'loginform' style = {loginProps}>
                    <LoginForm className = "loginform"/>
                </animated.form>
                <animated.form action = '' id = 'registerform' style = {registerProps}>
                    <RegisterForm className = "registerform"/>
                </animated.form>
                
            </div>


            <animated.div className = "forgot-panel" style = {loginProps}>
                <a href = "/reset_password" >Forgot your password?</a>
            </animated.div>

        </div>
        </div>
    );
}

export default Login
