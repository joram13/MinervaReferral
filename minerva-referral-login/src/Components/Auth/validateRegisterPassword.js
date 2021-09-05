const validateRegisterPassword = (password, confirmpassword)=> {
    
    let errorsPassword = {}
    
        if(!password){
            errorsPassword = 'Password is required'
        } else if (password.length < 8){
            errorsPassword = 'Password needs to be longer than 6 characters'
        }else{
            errorsPassword ="Valid"
        }
    
        if(!confirmpassword){
            errorsPassword = 'Confirming password is required'
        }else if (!password !== confirmpassword){
            errorsPassword = "Passwords do not match"
        }else{
            errorsPassword ="Valid"
        }
    return errorsPassword
    }
    
    export default validateRegisterPassword