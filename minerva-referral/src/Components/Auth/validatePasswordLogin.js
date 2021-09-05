export default function validatePasswordLogin (passwordLogin ) {
    //password validation for testing state
    console.log("Password",passwordLogin)
    let errorsPassword = {}
    var passw=  /^[A-Za-z]\w{7,14}$/
    if(!passwordLogin){
        errorsPassword = 'Password is required'
    } else if (passwordLogin.length <= 8){
        errorsPassword= 'Password needs to be longer than 8 characters'
    }else if(!passwordLogin.match(passw)){
        errorsPassword="Must contain capital letters and special characters"
    }else{
        errorsPassword="Valid"
    }
    
    return errorsPassword
}