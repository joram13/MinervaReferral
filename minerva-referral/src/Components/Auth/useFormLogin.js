import {useState} from 'react'
import validateLogin from './validateLogin'


const useFormLogin = () =>{
    //will be used when flask app is created
    const [emailLogin, setEmailLogin] = useState({})
    const [passwordLogin,setPasswordLogin] = useState({})
    const [errorsEmail, setErrorsEmail] = useState({})
    const [errorsPassword, setErrorsPassword] = useState({})
    
    

    

    const handleSubmitLogin = e => {
        e.preventDefault()
       
        setErrorsEmail(validateLogin({emailLogin}))
        setErrorsPassword(validateLogin({passwordLogin}))
            
        }
    

    return { handleSubmitLogin, setEmailLogin, setPasswordLogin, errorsEmail, errorsPassword}
}

export default useFormLogin